fn dir_size x:str
 var r 0

 for dir_load x
  let n file_size v

  assign r add r n
 end

 ret r
end
