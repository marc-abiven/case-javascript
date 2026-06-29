fn stm_on_any_error stm:obj event:str error:obj args:etc
 let args decycle args
 let _error obj
 let properties obj_properties error

 for properties
  let v2 get error v

  put _error v v2
 end

 //kind

 if is_full args
  let first front args

  if is_str first
   shift args

   put _error "kind" first
  end
 end

 //report

 let report report_init _error

 report_log report

 //rest

 if is_full args
  flower "Arguments"

  let s to_dump args

  log s
 end

 //mail report

 if is_remote
  report_mail report

 //enable the verbose mode
 
 //assign verbose 1
 
 //exit code

 exit_code 1

 ret "error"
end
