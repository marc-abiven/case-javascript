fn ast_gn cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 ret call_ast_xn cpl args children source "function*"
end
