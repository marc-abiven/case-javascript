fn ast_assign cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty children

 let left front args

 check is_name left

 let right slice args 1
 let right expr_right right:etc
 let code concat left "=" right

 ret obj code source
end