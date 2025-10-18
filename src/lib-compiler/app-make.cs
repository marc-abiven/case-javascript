fn app_make app:str
 let cpl cpl_init app
 let o obj app
 let s obj_option o

 log "make" s

 cpl_include cpl

 let r cpl_generate cpl
 let tmp concat app "-tmp.js"
 let tmp path_tmp tmp

 file_save tmp r

 let success cpl_check_syntax cpl tmp

 fs_remove tmp

 check success

 cpl_deinit cpl

 ret r
end
