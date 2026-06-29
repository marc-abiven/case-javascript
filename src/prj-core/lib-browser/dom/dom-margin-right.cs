fn dom_margin_right x:obj y
 if is_undef y
  ret x.style.marginRight

 check is_cool y

 assign x.style.marginRight y
end
