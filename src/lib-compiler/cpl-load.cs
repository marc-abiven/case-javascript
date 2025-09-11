fn cpl_load x:obj y:str
 let r arr
 let path dir_current
 let path path_concat path "src"
 let path path_fix path
 let path strip_l y path
 let lines cpl_uncomment x path
 let lines split lines

 for lines 
  let index i
  let code v
  let source obj path index
  let o obj code source

  push r o
 end
 
 ret r
end
