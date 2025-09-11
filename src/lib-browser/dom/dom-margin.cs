fn dom_margin x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.margin

 check is_cool y

 assign x.style.margin y
end
