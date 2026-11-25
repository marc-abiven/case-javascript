fn cpl_version
 var version 0

 for dir_read "archive"
  let file path_file v
  let a split file "-"
  let n at a 1
  let n unpad_l n "0" //strip zeroes
  let n to_uint n

  assign version max version n
 end

 ret inc version
end
