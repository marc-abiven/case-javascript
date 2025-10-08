fn log x:etc
 //node log

 fn node_log x:etc
  //stringify

  let parts arr

  for x
   if is_str v
    push parts v

    cont
   end

   let s inspect v

   push parts s
  end

  let content join parts " "

  if is_empty content
   console.log " "
  else
   for split content
    let n tty_width
    let line ansi_head v n
    
    console.log line
   end
  end

  if log_file
   log_append x:etc
 end

 //buffer

 if is_str output
  let a arr

  for x
   if is_str v
    push a v
    cont
   end

   let s to_dump v

   push a s
  end

  let s join a " "
  let s concat s lf
  let s concat output s

  assign global.output s

  ret
 end

 //main

 if is_node
  node_log x:etc
 elseif is_browser
  if is_empty x
   console.log " "
  else
   console.log x:etc
 else
  stop
end
