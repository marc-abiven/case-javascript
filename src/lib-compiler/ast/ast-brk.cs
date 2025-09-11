fn ast_brk cpl:obj args:arr children:arr source:obj
 check is_empty args
 check is_empty children

 let code "break"

 ret obj code source
end
