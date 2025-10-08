fn srv_speed x:obj
 let row add x.offset x.chans.length
 let n time_now
 let n div row n

 ret trunc n
end
