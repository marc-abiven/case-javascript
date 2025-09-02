fn time_str x
 if is_undef x
  let n time_get

  ret time_str n
 end

 check is_num x

 let n mul x 1000
 let o new Date n
 let h o.getHours
 let h pad_l h "0" 2
 let m o.getMinutes
 let m pad_l m "0" 2

 ret concat h "h" m "m"
end