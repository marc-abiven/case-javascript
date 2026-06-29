fn contain x:composite y
 if is_undef y
  check same arguments.length 2

 //string

 if is_str x
  check is_str y

  if is_empty y
   ret false

  ret x.includes y
 end

 //array

 if is_arr x
  ret x.includes y

 //object

 if is_obj x
  forin x
   if same v y
    ret true
  end

  ret false
 end

 //any

 stop
end
