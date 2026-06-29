fn iter_get x:def y:str
 //string

 if is_str x
  let i to_i y

  ret at x i
 end

 //array

 if is_arr x
  let i to_i y

  if is_numeric i
   ret at x i

  ret inline "x[y]" //for array like
 end

 //object

 if is_obj x
  ret get x y

 //any

 stop
end
