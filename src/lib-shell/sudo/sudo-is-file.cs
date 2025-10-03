fn sudo_is_file x
 if not is_str x
  ret false

 let result os_run "sudo" "stat" "--terse" "--format=%F" x

 if same result.status 1
  ret false

 ret contain result.out "file"
end