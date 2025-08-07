fn dom_border x y
 check is_obj x
 
 if is_undef y
  ret dom_border x "0.1vw solid gray"
  
 check is_str y
 
 assign x.style.border y
end
