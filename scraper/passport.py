from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service('./driver/chromedriver')
driver = webdriver.Chrome(service=service)

def traverse_table():
    rows = driver.find_elements(By.XPATH, "//table[@id='lst_index_phpprogram']/tbody/tr[position() > 2]")
    for row in rows:
        try:
            # Find the link in the row
            link = row.find_element(By.XPATH, ".//a")
            link_url = link.get_attribute("href")

            # Open the link in a new tab
            driver.execute_script("window.open(arguments[0]);", link_url)

            # Switch to the new tab
            driver.switch_to.window(driver.window_handles[1])

            # Wait for 2 seconds to let the new page load
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )

            # Close the new tab
            driver.close()

            # Switch back to the main tab
            driver.switch_to.window(driver.window_handles[0])

        except Exception as e:
            print(f"Error occurred while processing row: {e}")


try:
    url = 'https://uwaterloo-horizons.symplicity.com/index.php?mode=list&au=&ck='
    driver.get(url)

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, 'body'))
    )

    print("Page loaded successfully!")


    button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, 'icon_24_programs'))
    )
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

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "lst_index_phpprogram"))
    )

    traverse_table()


except Exception as e:
    print("An error occurred:", e)


finally:
    driver.quit()

