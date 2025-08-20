fn date_str x
 if is_undef x
  let n time_get

  ret date_str n
 end

 check is_num x

 let n mul x 1000
 let o new Date n
 let y o.getFullYear
 let m o.getMonth
 let m inc m
 let m pad_l m "0" 2
 let d o.getDate
 let d pad_l d "0" 2

 ret concat y "/" m "/" d
end