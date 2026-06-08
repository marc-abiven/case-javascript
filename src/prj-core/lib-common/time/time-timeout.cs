fn time_timeout x:fn y z:etc
 if is_undef y
 if is_undef y
  let t div 1 30 //30 fps

  ret time_timeout x t z:etc
 end

 check is_num y

 let fn on x z:etc
 let n mul y 1000 //in seconds

 setTimeout fn n
end