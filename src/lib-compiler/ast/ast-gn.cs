fn ast_gn cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 ret call_ast_xn cpl parameters children source "function*"
end
