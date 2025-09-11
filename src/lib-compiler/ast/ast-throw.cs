fn ast_throw cpl:obj args:arr children:arr source:obj
 check is_empty children

 let code expr_right args:etc
 let code space "throw" code

 ret obj code source
end
