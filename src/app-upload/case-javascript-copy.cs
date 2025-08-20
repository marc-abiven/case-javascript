fn case_javascript_copy
 let r "tmp/case-javascript"

 dir_make r

 forof dir_read "." true
  let base path_base v

  if same base "archive"
   cont

  if same base "tmp"
   cont

  if same base "cache.txt"
   cont

  if match base "usage-*.txt"
   cont

  let target path_concat r base

  fs_copy v target
 end
 
 forof dir_find r "log.txt"
  fs_remove v
 end
 
 ret r
end
