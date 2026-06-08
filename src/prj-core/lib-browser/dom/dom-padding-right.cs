fn dom_padding_right x:obj y
 if is_undef y
  ret x.style.paddingRight

 check is_cool y

 assign x.style.paddingRight y
end
