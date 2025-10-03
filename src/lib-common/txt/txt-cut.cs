fn txt_cut x y
 if is_str x
  check is_uint y

  let a split x
  let a txt_cut a y

  ret join a
 end

 check is_arr x
 check is_uint y

 let r arr

 for x
  let s head v y

  push r s
 end

 ret r
end
