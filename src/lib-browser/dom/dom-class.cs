fn dom_class x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.className

 check is_str y

 assign x.className y
end
