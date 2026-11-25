fn ast_check cpl:obj args:arr children:arr source:obj
 check is_empty children

 let code join args ","
 let code paren code
 let code concat "check" code

 ret obj code source
end
