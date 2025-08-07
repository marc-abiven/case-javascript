fn time_interval x y
 check is_fn x

 if is_undef y
  ret time_timeout x 0
  
 check is_uint y
 
 let fn on x
 let n mul y 1000

 setInterval fn n
end
