fn dom_margin_left x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.marginLeft

 check is_cool y

 assign x.style.marginLeft y
end
