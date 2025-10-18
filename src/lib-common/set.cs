fn set x:obj y:str z
 if is_undef z
  check same arguments.length 3

 inline "x[y]=z"
end
