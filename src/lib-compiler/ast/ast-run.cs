fn ast_run cpl:obj args:arr children:arr source:obj
 check is_full args
 check is_empty children

 let code expr_call cpl args:etc
 let code space "yield*" code

 ret obj code source
end
