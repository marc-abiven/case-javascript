fn case_javascript_copy
 let tmp path_tmp
 let r path_concat tmp "case-javascript"

 dir_make r

 for dir_read "." true
  let base path_base v

  if same base "archive"
   cont

  if same base "cache.txt"
   cont

  if same base "certbot.txt"
   cont

  if match_l base "."
   cont

  let target path_concat r base

  fs_copy v target
 end

 for dir_find r "log.txt"
  fs_remove v
 end
 
 ret r
end
