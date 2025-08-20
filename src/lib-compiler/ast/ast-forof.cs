fn ast_forof cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 ret call_ast_for cpl parameters children source "v of"
end