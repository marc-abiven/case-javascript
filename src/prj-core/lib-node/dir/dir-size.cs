fn dir_size path:str
 var r 0

 for dir_load path
  let n file_size v

  assign r add r n
 end

 ret r
end
