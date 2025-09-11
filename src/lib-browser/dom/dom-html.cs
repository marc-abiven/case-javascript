fn dom_html x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.innerHTML

 check is_str y

 assign x.innerHTML y
end
