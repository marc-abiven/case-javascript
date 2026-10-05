fn log_append x:etc
 //escape

 fn escape x:str
  let a arr

  for x
   //glyph
   
   if is_glyph v
    push a v

    cont
   end

   //get /uxxxx character

   let s char_escape v

   push a s
  end

  ret implode a
 end
 
 //is glyph
 
 fn is_glyph x
  if not is_char x
   ret false
   
  //whitespace
  
  if same x " "
   ret true

  //alnum

  if is_alnum x
   ret true

  //punctuation

  if is_punct x
   ret true
   
  //any

  ret false
 end
 
 //main

 //worker

 if is_main_thread
  if not is_null worker
   worker_call worker log_append x:etc

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

  let s inspect v false //no color

  push parts s
 end

 let pid pad_l process.pid " " 7
 let time time_get
 let date date_str time
 let time time_str time true
 let max_line_length mul 10 kb
 let content join parts " "
 let lines split content
 let lines map lines escape
 let lines txt_cut_r lines max_line_length

 //prompt

 let prompt space pid date time
 let a arr

 if is_empty lines
  //blank line

  push a prompt
 else
  //multilines with the same prompt

  for lines
   let s space prompt v

   push a s
  end
 end

 //write

 let content join a
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
 let lines split content

 shift a half
 append a lines

 let content join a
 let content concat content lf

 file_write config_log content
end
