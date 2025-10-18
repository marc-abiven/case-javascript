fn browser_get
 if is_chrome
  ret "chrome"

 if is_firefox
  ret "firefox"

 if is_safari
  ret "safari"

 ret "unknown"
end