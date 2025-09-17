fn dom_attr x:obj y:str z
 if is_undef z
  ret x.getAttribute y

 check is_cool z

 x.setAttribute y z
end
