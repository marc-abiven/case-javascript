fn time_timeout x:fn y z:etc
 if is_undef y
  ret time_timeout x 0.01 z:etc

 check is_num y

 let fn on x z:etc
 let n mul y 1000

 setTimeout fn n
end
