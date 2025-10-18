fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str
 check is_empty children

 let identifier front args

 check is_identifier identifier

 let code slice args 1
 let code call_expr_right cpl code:etc
 let code concat identifier "=" code
 let code space keyword code

 ret obj code source
end
