fn put x:obj y:str z
 if is_undef z
  check same arguments.length 3

 if has x y
  stop

 set x y z
end
