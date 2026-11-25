fn replace x:composite y:str z
 //string

 if is_str x
  check is_str z

  let a split x y

  ret join a z
 end

 //array

 if is_arr x
  check is_def z

  let r arr

  for x
   if same v y
    push r z
   else
    push r v
  end

  ret r
 end

 //object

 if is_object x
  let r obj

  forin x
   if same v y
    put r k z
   else
    put r k v
  end

  ret r
 end

 //any

 stop
end