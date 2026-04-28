fn replace x:vec y:str z:str
 if is_str x
  let a split x y

  ret join a z
 elseif is_arr x
  let r arr

  for x
   if same v y
    push r z
   else
    push r v
  end

  ret r
 else
  stop
end
