fn srv_limit x:obj y
 if is_undef y
  ret srv_limit x limit

 check is_num y
 check gte y 0

 let n srv_speed x
 let n mul y n

 ret trunc n
end
