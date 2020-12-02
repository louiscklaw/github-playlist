# iOS environment
import os,sys
from appium import webdriver
import base64
from time import sleep
import json
import unittest
from appium import webdriver


CURR_DIR=os.path.abspath(os.path.dirname(__file__))
SCREEN_CAPTURE_DIR='{}/screens'.format(CURR_DIR)

desired_caps = dict(
    platformName='iOS',
    platformVersion='14.1',
    automationName='xcuitest',
    deviceName='iPhone Simulator',
    # app=PATH('../../apps/UICatalog.app.zip')
    browserName='safari',
    loggingPrefs={"browser":"ALL"}
)
desired_caps["goog:loggingPrefs"]={"browser":"ALL"}

def getScreenShot(driver, sc_filename):
  img_data = driver.get_screenshot_as_base64()
  with open(sc_filename, "wb") as fh:
    fh.write(base64.urlsafe_b64decode(img_data))

driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
driver.implicitly_wait(30)

# class driver:
#   contexts='hello contexts'
#   def get_log(text):
#     return text

#   def get(text):
#     return ''

#   def quit():
#     return ''

#   class switch_to:
#     def context(text):
#       return text

try:
  print('driver.contexts')
  print(json.dumps(driver.contexts))
  # driver.switch_to.context("WEBVIEW_chrome")

  driver.get("https://aboutme.louislabs.com/")
  sleep(1)
  driver.switch_to.context(driver.contexts[1])

  fo=open('browser_food.log','w')
  fo.writelines(json.dumps(driver.get_log('browser')))

  # el = driver.find_element_by_accessibility_id('item')
  # el.click()


except Exception as e:
  raise e

finally:
  driver.quit()
  print('done')
