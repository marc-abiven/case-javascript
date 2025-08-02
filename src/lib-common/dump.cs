fn dump x
 check is_def x
 
 if call is_node
  let showHidden false
  let depth null
  let colors true
  let maxArrayLength null
  let o obj showHidden depth colors maxArrayLength
  let s util.inspect x o
  
  log s
 elseif is_browser
  let s to_dump x
 
  log s
 else
  stop
end
