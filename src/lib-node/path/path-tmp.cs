fn path_tmp x
 if is_undef x
  ret path_tmp "tmp/tmp.txt"

 check is_str x

 let dir path_dir x
 let file path_file x
 let ext path_ext x

 while true
  let base random
  let base to_base36 base
  let base head base 6
  let base concat file "-" base "." ext
  let r path_concat dir base

  if not is_file r
   ret r
 end
end