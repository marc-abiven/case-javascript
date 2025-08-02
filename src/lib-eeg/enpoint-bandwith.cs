fn endpoint_bandwidth x
 check is_obj x
 
 let n call time_now 
 let n div x.byte n
  
 ret trunc n
end
