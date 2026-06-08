fn cpl_source_map cpl:obj
 //files

 let script path_real cpl.target
 let files obj

 forin cpl.files
  let v get cpl.files k
  let a split v

  put files k a
 end
 
 //source code

 let source arr

 for cpl.out
  let path v.source.path
  let index v.source.index
  let js v.code
  let cs get files path
  let cs at cs index
  let o obj path index js cs

  push source o
 end

 ret obj script files source
end
