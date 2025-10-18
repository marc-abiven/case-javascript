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
  let s trim_r v

  if is_empty s
   push r s
  else
   let indent repeat " " y
   let s concat indent s

   push r s
  end
 end

 ret r
end
