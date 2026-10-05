fn ast_var cpl:obj args:arr children:arr source:obj
 check is_many args

 ret call_ast_declare cpl args children source "let"
end
