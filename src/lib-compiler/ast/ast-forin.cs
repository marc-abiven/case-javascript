fn ast_forin cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source
 
 ret call_ast_for cpl parameters children source "k in"
end
