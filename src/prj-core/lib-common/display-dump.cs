fn display_dump x
 if is_undef x
  check same arguments.length 1

 let x decycle x
 let x embellish x

 //undefined

 if is_undef x
  ret "undef"

 //scalar

 if is_scalar x
  ret json_encode x

 //array

 if is_arr x
  if is_empty x
   ret "arr"

  let lines arr

  push lines "arr"

  for x
   let s display_dump v

   if is_ln s
    let s space "" s

    push lines s
   else
    let s txt_indent s 1

    push lines s
   end
  end

  push lines "end"

  ret join lines
 end

 //object

 if is_obj x
  if is_empty x
   ret "obj"

  let lines arr

  push lines "obj"

  forin x
   let s display_dump v
   var key k

   if not is_key key
    assign key to_lit key

   if is_ln s
    let s space "" key s

    push lines s
   else
    let s2 space "" key
    let s txt_indent s 2

    push lines s2
    push lines s
   end
  end

  push lines "end"

  ret join lines
 end

 //function

 if is_fn x
  ret space "fn" x.name

 //generator

 if is_gn x
  ret space "gn" x.name

 //any

 let type get_type x
 let string to_str x
 let string to_lit string
 let o obj type string
 let s obj_option o

 ret space "val" s
end
