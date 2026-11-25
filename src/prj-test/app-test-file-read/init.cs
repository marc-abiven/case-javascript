fn init x:etc
 let path path_tmp "test"

 file_write path "test"

 let s file_read path

 log path s
end
