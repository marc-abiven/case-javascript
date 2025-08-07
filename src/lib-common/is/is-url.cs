fn is_url x
 if not is_ln x
  ret false

 if match_l x "http://"
  ret true

 if match_l x "https://"
  ret true
  
 ret false
end
