fn txt_head x y:uint
 if is_str x
  let a split x
  let a txt_head a y

  ret join a
 end

 check is_arr x

 let r arr

 for x
  let v trim_r v
  let v head v y

  push r v
 end

 ret r
end
