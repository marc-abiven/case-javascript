fn dom_class x:obj y
 if is_undef y
  ret x.className

 check is_str y

 assign x.className y
end
