fn case_javascript_copy
 let tmp path_tmp "tmp"
 let r path_concat tmp "case-javascript"

 dir_make r

 for dir_read "." true
  let base path_base v

  //archive

  if same base "archive"
   cont

  //tokens

  if match_l base "."
   cont

  let target path_concat r base

  fs_copy v target
 end

 ret r
end
