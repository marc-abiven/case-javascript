fn dump x
 check is_def x
 
 if is_node
  if process.stdout.isTTY
   let showHidden false
   let depth null
   let colors true
   let maxArrayLength null
   let maxStringLength null
   let o obj showHidden depth colors maxArrayLength maxStringLength
   let s util.inspect x o
   
   log s
  else
   let s to_dump x
 
   log s
  end
 elseif is_browser
  let s to_dump x
 
  log s
 else
  stop
end
