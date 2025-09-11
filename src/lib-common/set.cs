fn set x:obj y:str z
 //~ check is_obj x
 //~ check is_str y

 if is_undef z
  check same arguments.length 3

 inline "x[y]=z"
end
