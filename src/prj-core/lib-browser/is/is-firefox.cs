fn is_firefox
 let agent to_lower navigator.userAgent

 ret contain agent "firefox"
end