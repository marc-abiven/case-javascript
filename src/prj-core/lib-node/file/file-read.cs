fn file_read x:str y
 if is_undef y
  ret file_read x "utf8"

 let buffer fs.readFileSync x

 ret buffer.toString y
end