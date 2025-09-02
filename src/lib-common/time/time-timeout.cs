fn time_timeout x y
 check is_fn x

 if is_undef y
  ret time_timeout x 0.01

 check is_num y

 let fn on x
 let n mul y 1000

 setTimeout fn n
end