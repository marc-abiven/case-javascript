fn is_firefox
 let agent to_lower navigator.userAgent

 ret contain agent "chrome" 
end
