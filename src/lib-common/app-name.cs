fn app_name
 if is_node
  let file at process.argv 1
  let file path_file file
  
  ret replace file "." "-"
 elseif is_browser
  var file location.hostname
  let base path_base file

  if is_ip base   
   ret replace base "." "-"
   
  let file path_file base
  
  ret replace file "." "-"
 else
  stop
end

