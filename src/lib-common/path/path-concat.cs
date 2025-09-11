fn path_concat x:str y:str z:etc
 //~ check is_str x
 //~ check is_str y

 let x strip_r x "/"
 let y strip_l y "/"

 let r concat x "/" y

 if is_full z
  ret path_concat r z:etc

 ret r
end
