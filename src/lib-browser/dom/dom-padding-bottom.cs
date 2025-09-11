fn dom_padding_bottom x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.style.paddingBottom

 check is_cool y

 assign x.style.paddingBottom y
end
