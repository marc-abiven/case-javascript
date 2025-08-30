fn ast_check cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty children

 let code join args ","
 let code paren code
 let code concat "check" code

 ret obj code source
end
