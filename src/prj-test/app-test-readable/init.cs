fn init x:etc
 let path path_tmp "test.txt"

 file_touch path

 os_system "ls" "-alh" path

 let b is_readable path

 dump b
end
