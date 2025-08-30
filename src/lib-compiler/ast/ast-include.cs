fn ast_include cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_single args
 check is_empty children

 let path front args

 check is_lit path

 let path unwrap path

 stop
end
