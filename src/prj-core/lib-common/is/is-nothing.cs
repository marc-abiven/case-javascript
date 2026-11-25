fn is_nothing x
 //undefined

 if is_undef x
  ret true

 //null

 if is_null x
  ret true

 //any

 ret false
end
