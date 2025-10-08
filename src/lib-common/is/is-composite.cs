fn is_composite x
 if is_str x
  ret true

 if is_arr x
  ret true

 if is_obj x
  ret true

 ret false
end
