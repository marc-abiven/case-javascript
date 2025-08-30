fn ast_let cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_many args
 check is_empty children

 ret call_ast_declare cpl args children source "const"
end
