fn cpl_generate cpl:obj
 //get sloc

 fn get_sloc
  var r 0

  forin cpl.cache.uncomments
   let a split v.string
   let a reject a is_empty

   assign r add r a.length
  end

  ret r
 end

 //get index

 let pool arr

 fn get_index x:str
  let r find pool x

  if gte r 0
   ret r

  let r pool.length

  push pool x

  ret r
 end

 //main

 let section_code cpl_concat cpl

 //retrieve the paths

 let paths arr
 let relatives arr
 let indices arr

 for cpl.out
  let source v.source
  let path source.path

  check is_absolute path

  if not contain paths path
   push paths path

  let path path_shorten path
  let n get_index path

  push relatives n
  push indices source.index
 end

 //add the source code

 let contents obj

 for paths
  let path path_shorten v
  let key get_index path
  let key to_str key
  let content cpl_uncomment cpl v
  let value arr

  for split content
   let index get_index v

   push value index
  end

  put contents key value
 end

 //meta

 let section_meta arr

 let app cpl.app
 let compile time_get
 let compile trunc compile
 let version cpl_version
 let sloc get_sloc
 let meta obj app compile version sloc
 let meta js_encode meta
 let meta concat "const meta=" meta

 push section_meta meta

 //unique strings to work by index

 let pool json_encode pool
 let pool concat "const pool=" pool

 push section_meta pool

 //source code paths

 let relatives json_encode relatives
 let relatives concat "const relatives=" relatives

 push section_meta relatives

 let indices json_encode indices
 let indices concat "const indices=" indices

 push section_meta indices

 //source code

 let contents js_encode contents
 let contents concat "const contents=" contents

 push section_meta contents

 //function map for fn_select

 let fns join cpl.fns ","
 let fns brace fns
 let fns concat "const fns=" fns

 push section_meta fns

 //format

 let a arr

 append a section_code
 append a section_meta

 //main

 push a "main()"

 ret join a
end
