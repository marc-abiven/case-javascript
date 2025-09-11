fn dom_title x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.title

 check is_cool y

 assign x.title y
end
