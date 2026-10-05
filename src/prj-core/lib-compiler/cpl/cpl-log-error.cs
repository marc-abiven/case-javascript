fn cpl_log_error cpl:obj err:str path
 if is_undef path
  ret cpl_log_error cpl err cpl.target

 check is_str path

 //main

 if is_empty err
  ret false

 //try to parse the error

 try
  cpl_parse_error cpl path err
 catch e
  //let report report_init e

  //report_log report

  ret false
 end

 ret true
end
