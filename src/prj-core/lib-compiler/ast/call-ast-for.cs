fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str
 let r arr
 let code call_expr_right cpl args:etc
 let code space "const" keyword code
 let code paren code
 let code concat "for" code
 let node obj code source
 let block call_ast_block cpl children source

 push r node
 append r block

 ret r
end