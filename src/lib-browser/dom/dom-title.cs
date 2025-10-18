fn dom_title x:obj y
 if is_undef y
  ret x.title

 check is_cool y

 assign x.title y
end
