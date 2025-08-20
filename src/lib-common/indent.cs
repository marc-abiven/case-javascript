fn indent x y
 check is_str x

 if is_undef y
  ret indent x 1

 let a arr

 forof split x
  let s trim_r v

  if is_empty s
   push a s
  else
   let indent repeat " " y
   let s concat indent s

   push a s
  end
 end

 ret join a
end