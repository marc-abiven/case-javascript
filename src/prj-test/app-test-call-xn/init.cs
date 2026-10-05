fn init x:etc
 let cpl cpl_init "app-test"
 let tmp path_tmp "test-xn"
 let file path_file tmp
 let fn replace file "-" "_"
 let fn space "fn" fn "x:etc" "x"
 
 file_save tmp fn
   
 cpl_compile cpl tmp
end
