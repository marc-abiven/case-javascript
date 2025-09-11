fn dom_clone x:container
 //check is_container x

 if is_arr x
  let r arr

  forof x
   let node dom_clone v

   push r node
  end

  ret r
 elseif is_obj x
  ret x.cloneNode true
 else
  stop
end
