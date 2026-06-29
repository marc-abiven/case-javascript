fn to_dump x
 let val decycle x

 //undefined

 if is_undef val
  ret "undefined"

 //scalar

 if is_scalar val
  ret json_encode val

 //array

 if is_arr val
  if is_empty val
   ret "arr"

  let a arr

  push a "arr"

  for val
   let s to_dump v
   let sharp concat "#" i

   if is_ln s
    let s space "" sharp s

    push a s
   else
    let s2 space "" sharp
    let s txt_indent s 2

    push a s2
    push a s
   end
  end

  push a "end"

  ret join a
 end

 //object

 if is_obj val
  if is_empty val
   ret "obj"

  let a arr

  push a "obj"

  forin val
   let s to_dump v
   var key k

   if not is_key key
    assign key to_lit key

   if is_ln s
    let s space "" key s

    push a s
   else
    let s2 space "" key
    let s txt_indent s 2

    push a s2
    push a s
   end
  end

  push a "end"

  ret join a
 end

 //function

 if is_fn val
  ret space "fn" val.name

 //generator

 if is_gn val
  ret space "gn" val.name

 //any

 let type get_type val
 let string to_str val
 let string to_lit string
 let o obj type string
 let s obj_option o

 ret space "val" s
end