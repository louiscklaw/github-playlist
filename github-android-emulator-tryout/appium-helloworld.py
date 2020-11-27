from appium import webdriver

desired_caps = {}
desired_caps['platformName'] = 'Android'
# desired_caps['appPackage'] = 'net.openwritings.xmtl'
# desired_caps['appActivity'] = '.MainActivity'
# desired_caps['deviceName']='nexus_5_7.1.1'

# reference to server side
desired_caps['app'] = '/root/apk_pool/sample_apk_debug.apk'

# This will launch your Android application.
driver = webdriver.Remote('http://localhost:4444/wd/hub', desired_caps)
