fn to_fixed x:num precision
 if is_undef precision
  ret to_fixed x 2

 check is_uint precision

 //already an integer

 let a x.toFixed precision
 let a split a "."

 if is_single a
  ret s

 //float part

 let integer front a
 var float back a
 let digits explode float

 while is_full digits
  let c back digits

  if different c "0"
   brk

  drop digits
 end

 if is_empty digits
  ret integer

 //format

 assign float implode digits

 ret concat integer "." float
end
