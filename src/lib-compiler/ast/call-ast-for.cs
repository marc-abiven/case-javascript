fn call_ast_for cpl args children source keyword
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source
 check is_str keyword

 let r arr
 let code expr_right args:etc
 let code space "const" keyword code
 let code paren code
 let code concat "for" code
 let node obj code source
 let block call_ast_block cpl children source

 push r node
 append r block

 ret r
end
