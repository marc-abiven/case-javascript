fn txt_indent x y
 if is_undef y
  ret txt_indent x 1

 check is_uint y

 if is_str x
  let a split x
  let a txt_indent a y

  ret join a
 end

 check is_arr x

 let r arr

 for x
  let v trim_r v

  if is_empty v
   push r v

   cont
  end

  let indent repeat " " y
  let v concat indent v

  push r v
 end

 ret r
end