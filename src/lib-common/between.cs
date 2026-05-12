fn between x:num y:num z:num
 check gte z y

 if lt x y
  ret false

 if gt x z
  ret false

 ret true
end
