fn cpl_generate x
 check is_obj x

 let pool arr

 fn get_index x
  check is_str x

  let r find pool x

  if gte r 0
   ret r

  let r pool.length

  push pool x

  ret r
 end

 let a arr

 forof x.out
  push a v.code
 end

 let paths arr
 let relatives arr
 let indices arr

 forof x.out
  let source v.source
  let path source.path

  if not contain paths path
   push paths path

  let n get_index path

  push relatives n
  push indices source.index
 end

 let contents obj

 forof paths
  let key get_index v
  let key to_str key
  let path path_concat "src" v
  let content file_read path
  let content cpl_uncomment x content
  let value arr

  forof split content
   let index get_index v

   push value index
  end

  put contents key value
 end

 let app to_lit x.app
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

 push a "main()"

 ret join a
end
