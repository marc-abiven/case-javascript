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
  end

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

 //is text

 fn is_text x:arr
  for x
   if is_str v
    cont

   ret false
  end

  ret true
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

 if is_full log_stack //global
  let content stringify args:etc
  let content txt_cut_r content tty_column
  let content concat content lf
  let last back log_stack
  let last concat last content

  back log_stack 0 last

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

  //patches

  for parts
   let s patch_c1 v
   let s patch_nfkc s
   //let s patch_control s

   at parts i s
  end

  //cut

  let content join parts " "
  let lines arr

  for split content
   let v ansi_head v tty_column
   let v trim_r v

   push lines v
  end

  //print

  if is_main_thread
   //main thread

   if is_empty lines
    stdout_log //blank line
   else
    for lines
     stdout_log v
    end
   end
  elseif is_worker
   //worker

   if is_empty lines
    stdout_log_async //blank line
   else
    for lines
     stdout_log_async v
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
  //prevent the browser from displaying the text as a list of lines

  if is_text args
   let content join args " "
   let content txt_cut_r content tty_column

   for split content
    console.log v
   end

   ret
  end

  console.log args:etc

  ret
 end

 //any

 stop
end
