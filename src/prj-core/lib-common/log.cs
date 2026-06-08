fn log x:etc
 //censor

 fn censor x secret:str
  if is_arr x
   //array

   let r arr

   for x
    let v censor v secret

    push r v
   end

   ret r
  elseif is_obj x
   //object

   let r obj

   forin x
    let v get x k
    let v censor v secret

    put r k v
   end

   ret r
  elseif is_str x
   //string

   let s repeat "x" secret.length

   ret replace x secret s
  else
   //any

   ret x
  end
 end

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

  //patch c1

  for parts
   let s patch_c1 v

   at parts i s
  end

  //print

  let content join parts " "

  if is_empty content
   writeln ""
  else
   for split content
    let line ansi_head v tty_column

    writeln line
   end
  end

  //log file

  if log_volatile
   ret

  if log_file
   log_append x:etc
 end

 //writeln

 fn writeln x:str
  let s concat x "\n"

  stdout_write s
 end

 //main

 //silent

 if lte verbose -2
  ret

 //redact

 let args arr

 if is_null log_secret
  append args x
 else
  let a censor x log_secret

  append args a
 end

 if is_str log_output //global
  //capture

  let a arr

  for args
   if is_str v
    push a v

    cont
   end

   let s to_dump v

   push a s
  end

  let s join a " "
  let s concat s lf
  let s concat log_output s

  assign log_output s
 elseif is_node
  //node

  node_log args:etc
 elseif is_browser
  //browser

  if is_empty x
   console.log
  else
   console.log args:etc
 else
  stop
end