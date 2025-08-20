fn put x y z
 check is_obj x
 check is_str y
 check is_def z

 if has x y
  stop

 set x y z
end