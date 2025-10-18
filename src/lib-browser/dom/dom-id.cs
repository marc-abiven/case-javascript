fn dom_id x:obj y
 if is_undef y
  ret x.id

 check is_str y

 assign x.id y
end
