fn path_concat x:str y:str z:etc
 let x strip_r x "/"
 let y strip_l y "/"

 let r concat x "/" y

 if is_full z
  ret path_concat r z:etc

 ret r
end
