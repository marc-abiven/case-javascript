fn dbg_source_map
 var script null
 
 if is_node
  assign script at process.argv 1
  assign script path_real script
 end

 let lines_js split source
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

 //~ for paths
  //~ let path at paths i
  //~ let index at indices i
  //~ var line_js i

  //~ if is_node
  //~ elseif is_browser
   //~ assign line_js add line_js 5

  //~ let js at lines_js line_js
  //~ let cs get files path
  //~ let cs at cs index
  //~ let o obj path index js cs

  //~ push source o
 //~ end

 forin paths
  let i to_i k
  var n i

  if gte n paths.length
   cont

  let path at paths n
  let index at indices n
  var line_js n

  if is_node
  elseif is_browser
   assign line_js add line_js 5

  let js at lines_js line_js
  let cs get files path
  let cs at cs index
  let o obj path index js cs

  push source o
 end

 ret obj script files source
end
