fn dom_append x:obj y:arr
 //~ check is_obj x
 //~ check is_arr y

 forof y
  dom_push x v
 end
end
