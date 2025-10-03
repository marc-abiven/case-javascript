fn txt_prepend x y
 if is_str x
  check is_str y

  let a split x
  let a txt_prepend a y

  ret join a
 end

 check is_arr x
 check is_str y

 let r arr

 for x
  let s concat y v

  push r s
 end

 ret r
end
