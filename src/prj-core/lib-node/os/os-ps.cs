fn os_ps
 let r arr
 let s os_execute "ps" "-e" "--format" "pid,ppid,args"
 let a split s

 shift a //skip header

 for a
  let s txt_inline v
  let a split s " "
  let pid shift a
  let pid to_uint pid
  let parent shift a
  let parent to_uint parent
  let path shift a
  let args a
  let o obj pid parent path args

  push r o
 end

 ret r
end