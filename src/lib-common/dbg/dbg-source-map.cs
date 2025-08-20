fn dbg_source_map
 let lines_js dbg_source
 let lines_js split lines_js

 let paths arr

 forof relatives
  let path at pool v

  push paths path
 end

 let files obj

 forin contents
  let content get contents k
  let n to_uint k
  let path at pool n
  let lines arr

  forof content
   let s at pool v

   push lines s
  end

  put files path lines
 end

 let source arr

 if is_node
 elseif is_browser
  fornum 7
   push source null
  end
 end

 forin paths
  let i to_i k
  var n i

  if gte n paths.length
   cont

  let path at paths n
  let index at indices n
  var js n

  if is_node
  elseif is_browser
   assign js add js 5

  let js at lines_js js
  let cs get files path
  let cs at cs index
  let o obj path index js cs

  push source o
 end

 ret obj files source
end