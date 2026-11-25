fn txt_cut_r x y
 if is_str x
  check is_uint y

  let a split x
  let a txt_cut_r a y

  ret join a
 end

 check is_arr x
 check is_uint y

 let r arr

 for x
  let v head v y
  let v trim_r v

  push r v
 end

 ret r
end
