fn log x:etc
 fn node_log x:etc
  //console

  for x
  //~ forin x
   //~ let i to_i k
   //~ let v at x i
   var s null

   if is_str v
    assign s v
   else
    assign s inspect v

   write s

   let last dec x.length

   if different i last
    write " "
  end

  write "\n"

  //format

  let parts arr

  for x
  //~ forin x
   //~ let i to_i k
   //~ let v at x i
   var s null

   if is_str v
    assign s v
   else
    assign s inspect v false

   push parts s
  end
  
  let pid pad_l process.pid " " 6
  let time time_get
  let date date_str time
  let time time_str time true
  let content join parts " "
  let a split content
  let lines arr
  
  if is_empty a
   let s space pid date time
    
   push lines s
  else
   forof a
    let s space pid date time v
    
    push lines s
   end
  end
  
  //file
  
  let content join lines
  let content concat content "\n"
  let base concat app ".txt"
  let dir "log"
  let path path_concat dir base
  
  if not is_file path
   dir_make dir
   file_write path content
   ret
  end

  let size file_size path
  let limit mul 16 1024 1024

  if lt size limit
   file_append path content
   ret
  end

  //truncate

  let a file_load path
  let a split a
  let half div a.length 2
  let half trunc half

  shift a half
  append a lines

  let content join a
  let content concat content "\n"

  file_write path content
 end
 
 //buffer

 if is_str output
  let a arr

  forof x
   if is_str v
    push a v
    cont
   end

   let s to_dump v

   push a s
  end

  let s join a " "
  let s concat s "\n"
  let s concat output s

  assign global.output s

  ret
 end

 if is_node
  node_log x:etc
 elseif is_browser
  console.log x:etc
 else
  stop
end
