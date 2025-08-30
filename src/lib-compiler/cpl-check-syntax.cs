fn cpl_check_syntax cpl path
 check is_obj cpl
 check is_str path

 let o os_run binary "--trace-uncaught" "--trace-deprecation" "--check" path

 check is_empty o.out

 if same o.status 0
  check is_empty o.err
  ret true
 end

 check cpl_log_error cpl path o.err

 ret false
end
