fn h_border x:obj y
 if is_undef y
  let style space border "solid gainsboro"

  ret h_border x style
 end

 check is_str y

 h_style x "border" y
end