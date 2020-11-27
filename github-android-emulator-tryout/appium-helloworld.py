import os,sys
from appium import webdriver

GITHUB_WORKSPACE = os.env['GITHUB_WORKSPACE']
CURR_DIR=os.path.dirname(__file__)
SCREEN_CAPTURE_DIR='{}/screens'.format(CURR_DIR)

desired_caps = {
  "platformName": "Android",
  "appPackage": "com.android.chrome",
  "appActivity": "com.google.android.apps.chrome.Main",
  "automationName": "UiAutomator2"
}

def getScreenShot(driver, sc_filename):
  img_data = driver.get_screenshot_as_base64()
  with open(sc_filename, "wb") as fh:
    fh.write(base64.urlsafe_b64decode(img_data))

# reference to server side
desired_caps['app'] = '{}/apk_pool/sample_apk_debug.apk'.format(CURR_DIR)

# This will launch your Android application.
driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)
driver.implicitly_wait(10)

getScreenShot(driver, '{}/example_com_screen.png'.format(SCREEN_CAPTURE_DIR))

driver.quit()

print('done')