fn is_browser
 try
  inline "window"
 catch
  ret false
 end

 ret true
end