fn data_limit x:obj y
 if is_undef y
  ret data_limit x limit

 check is_num y
 check gte y 0

 let r mul y x.speed
 let r trunc r

 ret r
end
