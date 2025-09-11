fn dom_margin_top x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.marginTop

 check is_cool y

 assign x.style.marginTop y
end
