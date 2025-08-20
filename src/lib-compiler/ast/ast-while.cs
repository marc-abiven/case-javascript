fn ast_while cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 let r arr
 let code expr_right parameters:etc
 let code paren code
 let code concat "while" code
 let node obj code source
 let block call_ast_block cpl children source

 push r node
 append r block

 ret r
end