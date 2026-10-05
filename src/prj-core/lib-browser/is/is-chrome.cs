fn is_chrome
 let agent to_lower navigator.userAgent

 ret contain agent "chrome"
end