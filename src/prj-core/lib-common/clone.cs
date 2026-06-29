//preserve scalars and containers
//stringify the rest

fn clone x
 if is_undef x
  check same arguments.length 1

 let val decycle x

 //undef

 if is_undef val
  ret val

 //scalar

 if is_scalar val
  ret val

 //array

 if is_arr val
  let r arr

  for val
   let v clone v

   push r v
  end

  ret r
 end

 //object

 if is_obj val
  let r obj

  forin val
   let v clone v

   put r k v
  end

  ret r
 end

 //any

 ret to_dump val
end
