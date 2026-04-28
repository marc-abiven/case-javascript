fn ast_while cpl:obj args:arr children:arr source:obj
 let r arr
 let code call_expr_right cpl args:etc
 let code paren code
 let code concat "while" code
 let node obj code source
 let block call_ast_block cpl children source

 push r node
 append r block

 ret r
end
