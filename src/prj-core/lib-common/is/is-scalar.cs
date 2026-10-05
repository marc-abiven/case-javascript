fn is_scalar x
 //null

 if is_null x
  ret true

 //boolean

 if is_bool x
  ret true

 //number

 if is_num x
  ret true

 //string

 if is_str x
  ret true

 //any

 ret false
end