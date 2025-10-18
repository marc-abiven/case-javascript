fn time_str x second
 if is_undef x
  let n time_get

  ret time_str n second
 end

 if is_undef second
  ret time_str x false

 check is_num x

 let n mul x 1000
 let o new Date n
 let h o.getHours
 let h pad_l h "0" 2
 let m o.getMinutes
 let m pad_l m "0" 2
 let r concat h "h" m "m"

 if not second
  ret r

 let s o.getSeconds
 let s pad_l s "0" 2

 ret concat r s "s"
end