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
  let v trim_r v
  let v head v y

  push r v
 end

 ret r
end
