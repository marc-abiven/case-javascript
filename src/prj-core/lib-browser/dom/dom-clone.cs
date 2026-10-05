fn dom_clone x:container
 //array

 if is_arr x
  let r arr

  for x
   let node dom_clone v

   push r node
  end

  ret r
 end

 //object

 if is_obj x
  ret x.cloneNode true

 //any

 stop
end