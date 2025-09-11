fn dom_back_color x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.backgroundColor

 check is_str y

 assign x.style.backgroundColor y
end
