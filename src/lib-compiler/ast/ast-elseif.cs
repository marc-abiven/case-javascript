fn ast_elseif cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source
 
 ret call_ast_if cpl parameters children source "else if"
end
