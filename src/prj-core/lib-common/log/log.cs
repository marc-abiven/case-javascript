fn log x:etc
 //censor

 fn censor x secret:str
  //array

  if is_arr x
   let r arr

   for x
    let v censor v secret

    push r v
   end

   ret r

  //object

  if is_obj x
   let r obj

   forin x
    let v censor v secret

    put r k v
   end

   ret r
  end

  //string

  if is_str x
   let s repeat "x" secret.length

   ret replace x secret s
  end

  //any

  ret x
 end

 //write ln

 fn write_ln x:str
  let s concat x "\n"
  let success process.stdout.write s

  check success
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

 //capture

 if is_str log_output //global
  let s stringify args:etc
  let s concat s lf
  let s concat log_output s

  assign log_output s

  ret
 end

 //node

 if is_node
  //inspect

  let parts arr

  for args
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

  if is_main_thread
   //main thread
   
   if is_empty content
    stdout_log //blank line
   else
    for split content
     let line ansi_head v tty_column

     stdout_log line
    end
   end
  elseif is_worker
   //worker

   if is_empty content
    writeln "" //blank line
   else
    for split content
     let line ansi_head v tty_column

     write_ln line
    end
   end
  else
   stop

  //log file

  if log_volatile
   ret

  if log_file
   log_append args:etc

  ret
 end

 //browser

 if is_browser
  console.log args:etc

  ret
 end

 //any

 stop
end
