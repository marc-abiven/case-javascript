fn srv_speed x
 check is_obj x
 
 let row add x.offset x.chans.length
 let n time_now
 let n div row n
   
 ret trunc n
end
