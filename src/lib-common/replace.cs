fn replace x y z
 check is_vec x
 check is_str y
 check is_str z

 if is_str x
  let a split x y

  ret join a z
 elseif is_arr x
  let r arr

  forof x
   if same v y
    push r z
   else
    push r v
  end

  ret r
 else
  stop
end