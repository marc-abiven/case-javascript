fn ast_cont cpl:obj args:arr children:arr source:obj
 check is_empty args
 check is_empty children

 let code "continue"

 ret obj code source
end
