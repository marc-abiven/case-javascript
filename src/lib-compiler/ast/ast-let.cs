fn ast_let cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_many parameters
 check is_empty children

 ret call_ast_declare cpl parameters children source "const"
end
