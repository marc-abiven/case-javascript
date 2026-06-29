fn replace x:vec y:str z:str
 //string

 if is_str x
  let a split x y

  ret join a z
 end

 //array

 if is_arr x
  let r arr

  for x
   if same v y
    push r z
   else
    push r v
  end

  ret r
 end

 //any

 stop
end