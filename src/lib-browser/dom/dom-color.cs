fn dom_color x:obj y
 if is_undef y
  ret x.style.color

 check is_str y

 assign x.style.color y
end
