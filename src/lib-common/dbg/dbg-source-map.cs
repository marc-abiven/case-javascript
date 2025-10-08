fn dbg_source_map
 let lines_js split source
 let paths arr

 for relatives
  let path at pool v

  push paths path
 end

 let files obj

 forin contents
  let content get contents k
  let n to_uint k
  let path at pool n
  let lines arr

  for content
   let s at pool v

   push lines s
  end

  put files path lines
 end

 let source arr

 if is_node
 elseif is_browser
  fornum 8
   push source null
  end
 end

 for paths
  if gte i paths.length
   cont

  let path at paths i
  let index at indices i
  var line_js i

  if is_node
  elseif is_browser
   assign line_js add line_js 5

  let js at lines_js line_js
  let cs get files path
  let cs at cs index
  let o obj path index js cs

  push source o
 end

 var script null

 if is_node
  assign script global.script

 ret obj script files source
end
