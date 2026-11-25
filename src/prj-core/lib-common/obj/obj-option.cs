fn obj_option map:obj
 let a arr

 forin map
  let key to_lisp k //beautify
  var value v

  if is_null value
   assign value "null"
  elseif is_xn value
   assign value value.name
  elseif is_key value
  elseif is_lisp value
  else
   assign value display_encode value

   if is_name value
   elseif is_lit value
   else
    assign value to_lit value
  end

  let s concat key "=" value

  push a s
 end

 ret join a " "
end
