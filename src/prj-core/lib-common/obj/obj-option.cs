fn obj_option x:obj
 let a arr

 forin x
  let key to_lisp k //beautify
  var value v

  if is_xn value
   assign value value.name
  elseif is_key value
  else
   assign value json_encode value

  let s concat key "=" value

  push a s
 end

 ret join a " "
end
