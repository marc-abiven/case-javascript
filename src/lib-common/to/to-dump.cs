fn to_dump x
 if is_undef x
  check same arguments.length 1

 let val clone x

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
 elseif is_obj val
  if is_empty val
   ret "obj"

  let a arr

  push a "obj"

  forin val
   let v get val k
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
 elseif is_word val
  ret to_lit val
 elseif is_fn val
  ret space "fn" val.name
 else
  ret json_encode val
end
