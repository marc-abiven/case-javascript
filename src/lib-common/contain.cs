fn contain x:composite y
 if is_undef y
  check same arguments.length 2

 if is_str x
  check is_str y

  if is_empty y
   ret false

  ret x.includes y
 elseif is_arr x
  ret x.includes y
 elseif is_obj x
  forin x
   let v get x k

   if same v y
    ret true
  end

  ret false
 else
  stop
end