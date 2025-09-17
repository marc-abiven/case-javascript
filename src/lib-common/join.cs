fn join x:arr y
 if is_undef y
  ret join x "\n"

 check is_str y

 ret x.join y
end
