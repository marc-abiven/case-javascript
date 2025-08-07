fn dbg_source
 if is_node
  let path at process.argv 1  
  let s file_read path
  
  ret s
 elseif is_browser  
  ret html.outerHTML
 else
  stop
end
