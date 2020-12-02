# iOS environment
import unittest
from appium import webdriver

desired_caps = dict(
    platformName='iOS',
    platformVersion='13.4',
    automationName='xcuitest',
    deviceName='iPhone Simulator',
    # app=PATH('../../apps/UICatalog.app.zip')
    browserName='safari'
)

self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
el = self.driver.find_element_by_accessibility_id('item')
el.click()
