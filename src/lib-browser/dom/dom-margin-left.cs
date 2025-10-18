fn dom_margin_left x:obj y
 if is_undef y
  ret x.style.marginLeft

 check is_cool y

 assign x.style.marginLeft y
end
