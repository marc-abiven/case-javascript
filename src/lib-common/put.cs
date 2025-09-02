fn put x y z
 check is_obj x
 check is_str y

 if is_undef z
  check same arguments.length 3

 if has x y
  stop

 set x y z
end