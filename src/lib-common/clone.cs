fn clone x
 if is_undef x
  check same arguments.length 1

 let history arr

 fn process x
  if is_container x
   push history x

  if is_arr x
   let r arr

   forof x
    if contain history v
     push r null
     cont
    end

    let v process v

    push r v
   end

   ret r
  elseif is_obj x
   let r obj

   forin x
    let v get x k

    if contain history v
     put r k null
     cont
    end

    let v process v

    put r k v
   end

   ret r
  else
   ret value x
 end

 ret process x
end
