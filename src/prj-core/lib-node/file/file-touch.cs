fn file_touch path:str
 var data ""

 if is_file path
  assign data file_read path

 file_write path data
end