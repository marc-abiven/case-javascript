fn dom_padding_left x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.paddingLeft

 check is_cool y

 assign x.style.paddingLeft y
end
