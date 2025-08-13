fn call_ast_if cpl parameters children source keyword
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source
 check is_str keyword
 
 let r arr
 let code expr_right parameters:etc
 let code paren code
 let code concat keyword code
 let node obj code source
 let block call_ast_block cpl children source
 
 push r node
 append r block
 
 ret r
end
