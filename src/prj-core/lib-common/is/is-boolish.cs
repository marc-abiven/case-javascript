fn is_boolish x
 if same x "true"
  ret true

 if same x "false"
  ret true

 ret false
end