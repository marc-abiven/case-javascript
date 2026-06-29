fn is_rgb x
 //r

 if not is_uint x.r
  ret false

 //g

 if not is_uint x.g
  ret false

 //b

 if not is_uint x.b
  ret false

 //any

 ret true
end