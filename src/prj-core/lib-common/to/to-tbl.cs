fn to_tbl x:container
 //array

 if is_arr x
  let r arr

  for x
   let value v
   let o obj value

   push r o
  end

  ret r
 end

 //object

 if is_obj x
  let r arr

  forin x
   let key to_lisp k //beautify
   let value v
   let o obj key value

   push r o
  end

  ret r
 end

 //any

 stop
end
