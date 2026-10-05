fn browser_get
 //chrome

 if is_chrome
  ret "chrome"

 //firefox

 if is_firefox
  ret "firefox"

 //safari

 if is_safari
  ret "safari"

 //any

 ret "unknown"
end