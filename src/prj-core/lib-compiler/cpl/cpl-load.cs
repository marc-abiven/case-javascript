fn cpl_load cpl:obj path:str
 let r arr
 let lines cpl_uncomment cpl path
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
