fn txt_inline x
 if is_str x
  let r replace x "\n" " "
  let r replace r "\r" ""
  let r replace_rec r "  " " "
  let r trim r

  ret r
 end

 check is_arr x

 let s join x
 let s txt_inline s

 ret split s
end