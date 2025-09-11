fn dom_margin_right x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.marginRight

 check is_cool y

 assign x.style.marginRight y
end
