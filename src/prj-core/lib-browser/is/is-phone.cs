fn is_phone
 let agent to_lower navigator.userAgent

 if contain agent "iphone"
  ret true

 if contain agent "android"
  ret true

 ret false
end