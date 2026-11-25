fn mime_type path:file
 let r os_execute "file" "--mime" "--brief" path
 let r split r " "
 let r front r
 let r strip_r r ";"

 ret r
end