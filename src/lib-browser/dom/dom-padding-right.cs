fn dom_padding_right x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.paddingRight

 check is_cool y

 assign x.style.paddingRight y
end
