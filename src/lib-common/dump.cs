fn dump x
 check is_def x
 
 fn find_arg_name 
  forof dbg_callstack
   let cs v.cs
   
   if not match cs "dump *"
    cont
    
   let a split cs " "
   
   ret back a
  end
  
  stop
 end
 
 let name find_arg_name
 
 if is_node
  if process.stdout.isTTY
   let showHidden false
   let depth null
   let colors true
   let maxArrayLength null
   let maxStringLength null
   let o obj showHidden depth colors maxArrayLength maxStringLength
   let s util.inspect x o
   
   log name s
  else
   let s to_dump x
 
   log name s
  end
 elseif is_browser
  let s to_dump x
 
  log name s
 else
  stop
end
