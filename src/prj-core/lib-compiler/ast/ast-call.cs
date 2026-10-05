fn ast_call cpl:obj args:arr children:arr source:obj
 check is_full args
 check is_empty children

 let code expr_call cpl args:etc

 ret obj code source
end
