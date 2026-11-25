fn file_read path:str encoding
 if is_def encoding
  check is_str encoding

 if is_undef encoding
  ret file_read path "utf8"

 let buffer fs.readFileSync path

 ret buffer.toString encoding
end
