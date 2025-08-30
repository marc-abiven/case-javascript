fn ast_brk cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty args
 check is_empty children

 let code "break"

 ret obj code source
end
