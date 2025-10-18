fn cpl_load cpl:obj path:str
 let r arr
 let path2 dir_current
 let path2 path_concat path2 "src"
 let path2 path_fix path2
 let path2 strip_l path path2
 let lines cpl_uncomment cpl path2
 let lines split lines

 for lines
  let path path2
  let index i
  let code v
  let source obj path index
  let o obj code source

  push r o
 end

 ret r
end
