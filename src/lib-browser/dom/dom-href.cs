fn dom_href x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.href

 check is_str y

 assign x.href y
end
