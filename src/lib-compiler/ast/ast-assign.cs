fn ast_assign cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty children

 let left front parameters
 
 check is_name left
 
 let right slice parameters 1
 let right expr_right right:etc 
 let code concat left "=" right
 
 ret obj code source
end
