fn init x:etc
 let path path_tmp

 file_save path "test"

 let buffer fs.readFileSync path
 let c get_class buffer

 log c buffer

 let s display_dump buffer

 log s
end