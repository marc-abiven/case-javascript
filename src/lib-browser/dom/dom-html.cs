fn dom_html x:obj y
 if is_undef y
  ret x.innerHTML

 check is_str y

 assign x.innerHTML y
end
