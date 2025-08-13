fn app_make x
 check is_str x

 let cpl cpl_init
 let s to_lit x

 log "make" s
 
 cpl_include cpl x 
 
 let r cpl_generate cpl 
 let tmp concat x "-tmp.js"
 let tmp path_concat "tmp" tmp
 let tmp path_tmp tmp
 
 file_save tmp r
 
 let success cpl_check_syntax cpl tmp
 
 fs_remove tmp
 
 check success
 
 cpl_deinit cpl

 ret r
end
