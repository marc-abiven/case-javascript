fn is_obj x
 if is_null x
  ret false
  
 let s typeof x
 
 ret same s "object"
end
