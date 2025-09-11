fn dom_id x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.id

 check is_str y

 assign x.id y
end
