fn is_rgb x
 if not is_uint x.r
  ret false

 if not is_uint x.g
  ret false

 if not is_uint x.b
  ret false

 ret true
end