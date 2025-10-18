fn log_append x:etc
 //escape

 fn escape x:str
  let a arr

  for x
   if is_alnum v
    push a v

    cont
   end

   if is_punct v
    push a v

    cont
   end

   //get /uxxx character

   let s char_escape v

   push a s
  end

  ret implode a
 end

 //main

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
 let inputs map inputs head max_line_length
 let inputs map inputs escape
 let lines arr

 if is_empty inputs
  let s space pid date time

  push lines s
 else
  for inputs
   let s space pid date time v

   push lines s
  end
 end

 //file

 let content join lines
 let content concat content lf

 if not is_file config_log
  let dir path_dir config_log

  dir_make dir
  file_write config_log content

  ret
 end

 let size file_size config_log
 let limit mul 16 1024 1024 //16Mb

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
