fn log_append x:etc
 //escape
 
 fn escape x:str
  let a arr
  
  forof x
   if is_alnum v
    push a v
    
    cont
   end

   if is_punct v
    push a v
    
    cont
   end
   
   let s json_encode v
   let s strip_l s "\""
   let s strip_r s "\""
   
   push a s
  end
  
  ret implode a
 end
 
 //format

 let parts arr

 for x
  if is_str v
   push parts v
   
   cont
  end

  let s inspect v false

  push parts s
 end
 
 let pid pad_l process.pid " " 6
 let time time_get
 let date date_str time
 let time time_str time true
 let inputs join parts " "
 let inputs split inputs 
 let inputs map inputs escape
 let lines arr
 
 if is_empty inputs
  let s space pid date time
   
  push lines s
 else
  forof inputs
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
