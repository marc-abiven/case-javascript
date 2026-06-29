fn time_interval x:fn y
 if is_undef y
  ret time_interval x 0

 check is_uint y

 let fn on x
 let n mul y 1000 //in seconds

 setInterval fn n
end
