fn is_obj x
 if is_null x
  ret false

 let s get_type x

 ret same s "object"
end
