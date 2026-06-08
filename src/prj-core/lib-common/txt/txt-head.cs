fn txt_head x y:uint
 if is_str x
  let a split x
  let a txt_head a y

  ret join a
 end

 check is_arr x

 let r arr

 for x
  let s head v y

  push r s
 end

 ret r
end