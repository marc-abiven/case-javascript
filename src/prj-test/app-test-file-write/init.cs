gn init x:etc
 let path path_tmp "test"

 file_write path "first"
 file_write path "second"
 file_write path "third"

 let s file_read path

 log s
end