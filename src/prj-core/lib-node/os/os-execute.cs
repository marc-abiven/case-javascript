fn os_execute x:etc
 let o os_run false x:etc
 let status o.status
 let out o.out
 let err o.err
 let a arr

 if is_full out
  push a out

 if is_full err
  push a err

 let s join a

 ret trim_r s
end
