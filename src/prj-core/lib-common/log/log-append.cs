fn log_append x:etc
 //escape

 fn escape x:str
  let a arr

  for x
   //printable

   if is_printable v
    push a v

    cont
   end

   //get /uxxxx character

   let s char_escape v

   push a s
  end

  ret implode a
 end

 //main

 //worker

 if is_main_thread
  if not is_null worker
   worker_post worker log_append x:etc

   ret
  end
 end

 //format

 let parts arr

 for x
  if is_str v
   let s ansi_strip v

   push parts s

   cont
  end

  let s inspect v false

  push parts s
 end

 let pid pad_l process.pid " " 7
 let time time_get
 let date date_str time
 let time time_str time true
 let max_line_length mul 10 kb
 let inputs join parts " "
 let inputs split inputs
 let inputs map inputs escape
 let inputs map inputs head max_line_length
 let lines arr
 let prompt space pid date time

 if is_empty inputs
  //blank line

  push lines prompt
 else
  //multilines with the same prompt

  for inputs
   let s space prompt v

   push lines s
  end
 end

 //write

 let content join lines
 let content concat content lf

 if not is_file config_log
  file_write config_log content

  ret
 end

 //append

 let size file_size config_log
 let limit mul 16 mb //16Mb

 if lt size limit
  file_append config_log content

  ret
 end

 //truncate

 let a file_load config_log
 let a split a
 let half div a.length 2
 let half trunc half

 shift a half
 append a lines

 let content join a
 let content concat content lf

 file_write config_log content
end