fn cpl_load x y
 check is_obj x
 check is_str y

 let r arr
 let s file_read y
 let s cpl_uncomment x s
 let path dir_current
 let path path_concat path "src"
 let path path_fix path
 let path strip_l y path
 let lines split s
 
 forin lines
  let i to_i k
  let v at lines i
  let index i
  let code v
  let source obj path index
  let o obj code source
  
  push r o
 end
 
 ret r 
end
