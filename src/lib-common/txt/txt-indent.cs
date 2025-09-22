fn txt_indent x
 if is_str x
  let a split x
  let a txt_indent a

  ret join a
 end

 check is_arr x

 let r arr

 forof x
  let s trim_r v

  if is_empty s
   push r s
  else
   let s concat " " s

   push r s
  end
 end

 ret r
end