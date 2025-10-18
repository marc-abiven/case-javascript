fn ast_let cpl:obj args:arr children:arr source:obj
 check is_many args
 check is_empty children

 ret call_ast_declare cpl args children source "const"
end
