fn ast_assign cpl:obj args:arr children:arr source:obj
 check is_empty children

 let left front args

 check is_name left

 let right slice args 1
 let right call_expr_right cpl right:etc
 let code concat left "=" right

 ret obj code source
end
