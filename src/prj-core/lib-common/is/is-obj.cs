fn is_obj x
 if is_null x
  ret false

 let type get_type x

 ret same type "object"
end
