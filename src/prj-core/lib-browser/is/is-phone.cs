fn is_phone
 let agent to_lower navigator.userAgent

 //iphone

 if contain agent "iphone"
  ret true
  
 //android

 if contain agent "android"
  ret true
 
 //any

 ret false
end
