import pyautogui
import time
pyautogui.FAILSAFE = False

while (True):
    time.sleep(7)
    for i in range(0,100):
        pyautogui.moveTo(0,i*10)
        time.sleep(5)
        #pyautogui.press('a')
        time.sleep(1)
        pyautogui.moveTo(i*10,15)

