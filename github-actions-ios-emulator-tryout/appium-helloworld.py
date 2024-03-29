# iOS environment
import os,sys
from appium import webdriver
import base64
from time import sleep

import unittest
from appium import webdriver

CURR_DIR=os.path.abspath(os.path.dirname(__file__))
SCREEN_CAPTURE_DIR='{}/screens'.format(CURR_DIR)

desired_caps = dict(
    platformName='iOS',
    platformVersion='13.4',
    automationName='xcuitest',
    deviceName='iPhone Simulator',
    # app=PATH('../../apps/UICatalog.app.zip')
    browserName='safari'
)

def getScreenShot(driver, sc_filename):
  img_data = driver.get_screenshot_as_base64()
  with open(sc_filename, "wb") as fh:
    fh.write(base64.urlsafe_b64decode(img_data))

driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
driver.implicitly_wait(30)

# https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending
driver.get('https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending');
getScreenShot(driver, '{}/check_browser.png'.format(SCREEN_CAPTURE_DIR))

driver.get('http://menymeny.com/manage/%E3%82%84%E3%81%8D%E3%81%A8%E3%82%8A/')
sleep(30)
getScreenShot(driver, '{}/menymeny_manage_screenshot.png'.format(SCREEN_CAPTURE_DIR))

driver.get('http://menymeny.com/food/%E3%82%84%E3%81%8D%E3%81%A8%E3%82%8A/')
sleep(30)
getScreenShot(driver, '{}/menymeny_food_screenshot.png'.format(SCREEN_CAPTURE_DIR))

driver.get('http://menymeny.com/admin/')
sleep(30)
getScreenShot(driver, '{}/menymeny_admin_screenshot.png'.format(SCREEN_CAPTURE_DIR))

# el = driver.find_element_by_accessibility_id('item')
# el.click()

driver.quit()

print('done')