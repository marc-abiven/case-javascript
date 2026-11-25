fn between n:num low:num high:num
 check gte high low

 if lt n low
  ret false

 if gt n high
  ret false

 ret true
end
