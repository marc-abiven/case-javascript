fn wp_fold x:arr
 check is_arr x

 fn get_children x:arr y:obj
  //~ check is_arr x
  //~ check is_obj y

  let r arr

  forof x
   if different v.parent y.id
    cont

   let o dup v

   assign o.children get_children x o

   push r o
  end

  ret r
 end

 let r arr
 let a dup x

 while is_full a
  let o shift a

  if same o.parent 0
   assign o.children get_children x o

   push r o
  end
 end

 ret r
end
