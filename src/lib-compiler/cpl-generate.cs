fn cpl_generate cpl:obj
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

 let a arr

 for cpl.out
  push a v.code
 end

 let paths arr
 let relatives arr
 let indices arr

 for cpl.out
  let source v.source
  let path source.path

  if not contain paths path
   push paths path

  let n get_index path

  push relatives n
  push indices source.index
 end

 let contents obj

 for paths
  let key get_index v
  let key to_str key
  let content cpl_uncomment cpl v
  let value arr

  for split content
   let index get_index v

   push value index
  end

  put contents key value
 end

 let app to_lit cpl.app
 let app concat "const app=" app

 push a app

 let compile time_get
 let compile trunc compile
 let compile concat "const compile=" compile

 push a compile

 let pool json_encode pool
 let pool concat "const pool=" pool

 push a pool

 let relatives json_encode relatives
 let relatives concat "const relatives=" relatives

 push a relatives

 let indices json_encode indices
 let indices concat "const indices=" indices

 push a indices

 let contents json_encode contents
 let contents concat "const contents=" contents

 push a contents

 let fns join cpl.fns ","
 let fns brace fns
 let fns concat "const fns=" fns

 push a fns

 push a "main()"

 ret join a
end
