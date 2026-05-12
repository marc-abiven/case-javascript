fn is_safari
 let agent to_lower navigator.userAgent

 ret contain agent "safari"
end