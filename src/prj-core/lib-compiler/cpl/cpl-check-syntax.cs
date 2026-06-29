fn cpl_check_syntax cpl:obj path
 if is_undef path
  ret cpl_check_syntax cpl cpl.target

 check is_str path

 let argv node_argv
 let o os_run argv:etc "--check" path

 check is_empty o.out

 if os_success o
  ret true

 check cpl_log_error cpl o.err path

 ret false
end
