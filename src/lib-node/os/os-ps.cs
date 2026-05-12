fn os_ps
 let r arr
 let s os_execute "ps" "aux"
 let a split s

 shift a

 for a
  let s replace_rec v "  " " "
  let a split s " "

  let pid at a 1
  let pid to_uint pid
  let path at a 10
  let args slice a 11
  let o obj pid path args

  push r o
 end

 ret r
end
