fn file_append path:str data:str
 if not is_file path
  file_write path data //atomic

  ret
 end

 let s file_read path //atomic
 let s concat s data

 file_write path s //atomic
end