//preserve scalars and containers
//stringify the rest

fn clone x
 if is_undef x
  check same arguments.length 1

 let x decycle x

 //undef

 if is_undef x
  ret x

 //scalar

 if is_scalar x
  ret x

 //array

 if is_arr x
  let r arr

  for x
   let v clone v

   push r v
  end

  ret r
 end

 //object

 if is_obj x
  let r obj

  forin x
   let v clone v

   put r k v
  end

  ret r
 end

 //any

 ret display_dump x
end
