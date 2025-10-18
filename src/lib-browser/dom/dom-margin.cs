fn dom_margin x:obj y
 if is_undef y
  ret x.style.margin

 check is_cool y

 assign x.style.margin y
end
