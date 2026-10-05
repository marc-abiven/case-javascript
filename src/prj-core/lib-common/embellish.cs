//convert keys to snake case

fn embellish x
 if is_undef x
  check same arguments.length 1

 //undefined

 if is_undef x
  ret x

 //scalar

 if is_scalar x
  ret x

 //array

 if is_arr x
  let r arr

  for x
   let v embellish v

   push r v
  end

  ret r
 end

 //object

 if is_obj x
  let o obj

  forin x
   let v embellish v
   let key strip_l k "_"

   if is_empty key
    put o k v

    cont
   end

   var key to_snake key

   //make unique key

   var n 1
   var s key

   while true
    if not has o s
     assign key s

     brk
    end

    assign s concat key n
    assign n inc n
   end

   //put

   put o key v
  end

  ret sort o
 end

 //any

 ret value x
end