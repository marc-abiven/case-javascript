fn config_replace path:str pattern:str replace:str
 let inputs sudo_file_read path
 let inputs split inputs
 let outputs arr
 
 while is_full inputs
  let line shift inputs
  
  //match
  
  if match_l line pattern
   let replace pad_r replace " " config_padding
   let replace concat replace "#" config_tag

   push outputs replace

   trace "config>" line
   
   brk
  end
  
  push outputs line
 end
 
 append outputs inputs
 
 let content join outputs

 sudo_file_save path content
end
