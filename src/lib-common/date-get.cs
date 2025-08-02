fn date_get x
 if is_undef x
  let n call time_get
  
  ret date_get n
 end
 
 check is_num x
 
 let n mul x 1000
 let o new Date n
 let y call o.getFullYear 
 let m call o.getMonth
 let m inc m
 let m pad_l m "0" 2 
 let d call o.getDate 
 let d pad_l d "0" 2

 ret concat y "/" m "/" d
end
