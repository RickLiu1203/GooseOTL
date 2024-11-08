import json
import os
import shutil
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service('./driver/chromedriver')

# Set up Chrome options for headless printing to PDF
options = webdriver.ChromeOptions()
options.add_argument('--kiosk-printing')
#options.add_argument('--headless=new')  # Uncomment if you want headless mode

# Define the download directories
primary_dir = "../data/pdfs"
secondary_dir = "../data/pdfscont"
temp_download_dir = "../data/temp_pdfs"  # Temporary directory for initial saving
os.makedirs(primary_dir, exist_ok=True)
os.makedirs(secondary_dir, exist_ok=True)
os.makedirs(temp_download_dir, exist_ok=True)

# Set Chrome preferences for saving PDFs
prefs = {
    'printing.print_preview_sticky_settings.appState': json.dumps({
        "recentDestinations": [{"id": "Save as PDF", "origin": "local", "account": ""}],
        "selectedDestinationId": "Save as PDF",
        "version": 2
    }),
    'savefile.default_directory': os.path.abspath(temp_download_dir),
    'download.prompt_for_download': False,
    'download.directory_upgrade': True,
    'plugins.always_open_pdf_externally': True
}
options.add_experimental_option('prefs', prefs)
options.add_argument('--kiosk-printing')  # Bypass print dialog

# Initialize the WebDriver
driver = webdriver.Chrome(service=service, options=options)

def traverse_table():
    rows = driver.find_elements(By.XPATH, "//table[@id='lst_index_phpprogram']/tbody/tr[position() > 2 and position() < last()]")
    for idx, row in enumerate(rows, start=0):
        try:
            link = row.find_element(By.XPATH, ".//a")
            link_url = link.get_attribute("href")

            driver.execute_script("window.open(arguments[0]);", link_url)
            driver.switch_to.window(driver.window_handles[1])

            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))

            time.sleep(2)  # Allow page to fully load

            # Save the page as a PDF
            save_pdf(f"page_{idx}.pdf", idx)

            driver.close()
            driver.switch_to.window(driver.window_handles[0])

        except Exception as e:
            print(f"Error occurred while processing row {idx}: {e}")

def save_pdf(filename, index):
    # Use window.print to save PDF in the temporary download directory
    driver.execute_script('window.print();')
    time.sleep(1)  # Short delay to allow print/save to complete

    # Determine the target directory based on index
    target_dir = primary_dir if index < 100 else secondary_dir
    source_path = os.path.join(temp_download_dir, filename)
    target_path = os.path.join(target_dir, filename)

    # Move file to the correct directory if it exists
    if os.path.exists(source_path):
        shutil.move(source_path, target_path)
        print(f"Moved {filename} to {target_dir}")
    else:
        print(f"File {filename} was not found in the temp directory.")

try:
    url = 'https://uwaterloo-horizons.symplicity.com/index.php?mode=list&au=&ck='
    driver.get(url)

    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'body')))
    print("Page loaded successfully!")

    button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, 'icon_24_programs')))
    button.click()
    print("Button clicked successfully!")    

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//select[@class='js-selectlist-select' and @aria-label='Select the number of items to show per page.']"))
    )

    select_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//select[@class='js-selectlist-select' and @aria-label='Select the number of items to show per page.']"))
    )

    select = Select(select_element)
    select.select_by_value('250')
    print("Option with value '250' selected successfully.")

    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "lst_index_phpprogram")))

    traverse_table()

except Exception as e:
    print("An error occurred:", e)

finally:
    driver.quit()
