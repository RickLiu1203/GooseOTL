import json
import os
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
    rows = driver.find_elements(By.XPATH, "//table[@id='lst_index_phpprogram']/tbody/tr[position() > 2 and position() < last()]")
    for row in rows:
        try:
            link = row.find_element(By.XPATH, ".//a")
            link_url = link.get_attribute("href")

            driver.execute_script("window.open(arguments[0]);", link_url)
            driver.switch_to.window(driver.window_handles[1])

            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )

            get_basic_details()


            driver.close()
            driver.switch_to.window(driver.window_handles[0])

        except Exception as e:
            print(f"Error occurred while processing row: {e}")

def get_basic_details():
    # Get school name, city, and country
    school_name_element = driver.find_element(By.ID, "dnf_class_values_institution__name__widget")
    school_name = school_name_element.text

    geo_element = driver.find_element(By.CLASS_NAME, "location_info")
    country = geo_element.get_attribute("data-country")
    city = geo_element.get_attribute("data-city")

    # Define the path for the JSON file
    file_path = os.path.join("..", "data", "data.json")
    
    # Ensure the directory exists
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # Load existing data or initialize an empty list if the file doesn't exist
    if os.path.exists(file_path):
        with open(file_path, "r") as json_file:
            data = json.load(json_file)
    else:
        data = []

    # Determine the next ID by counting existing items
    next_id = len(data)

    # Create a new school entry
    new_entry = {
        "id": next_id,
        "name": school_name,
        "city": city,
        "country": country
    }

    # Append the new entry to the data list
    data.append(new_entry)

    # Write the updated data back to the JSON file
    with open(file_path, "w") as json_file:
        json.dump(data, json_file, indent=4)

    print(f"Added entry for {school_name} to {file_path}")


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

