fn dom_border x:obj y
 if is_undef y
  ret dom_border x "var(--border) solid gainsboro"

 check is_str y

 assign x.style.border y
end
