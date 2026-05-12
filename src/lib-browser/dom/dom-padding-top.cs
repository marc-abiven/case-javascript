fn dom_padding_top x:obj y
 if is_undef y
  ret x.style.paddingTop

 check is_cool y

 assign x.style.paddingTop y
end
