fn dom_float x:obj y
 //~ check is_obj x

 if is_undef y
  ret dom_float x "left"
 
 check is_str y

 assign x.style.float y
end
