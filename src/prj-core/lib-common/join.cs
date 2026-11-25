fn join x:arr y
 if is_undef y
  ret join x lf

 check is_str y

 ret x.join y
end
