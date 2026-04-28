fn ast_inline cpl:obj args:arr children:arr source:obj
 check is_single args
 check is_empty children

 let code front args

 check is_lit code

 let code unwrap code

 ret obj code source
end
