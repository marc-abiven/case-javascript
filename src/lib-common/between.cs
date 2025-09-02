fn between x y z
 check is_num x
 check is_num y
 check is_num z
 check gte z y

 if lt x y
  ret false

 if gt x z
  ret false

 ret true
end