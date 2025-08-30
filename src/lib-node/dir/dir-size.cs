fn dir_size x
 check is_str x

 var r 0

 forof dir_load x
  let n file_size v

  assign r add r n
 end

 ret r
end