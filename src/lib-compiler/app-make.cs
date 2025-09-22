fn app_make x:str
 let cpl cpl_init x
 let s to_lit x

 log "make" s

 cpl_include cpl

 let r cpl_generate cpl
 let tmp concat x "-tmp.js"
 let tmp path_tmp tmp

 file_save tmp r

 let success cpl_check_syntax cpl tmp

 fs_remove tmp

 check success

 cpl_deinit cpl

 ret r
end
