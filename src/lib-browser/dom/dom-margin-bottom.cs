fn dom_margin_bottom x:obj y
 if is_undef y
  ret x.style.marginBottom

 check is_cool y

 assign x.style.marginBottom y
end
