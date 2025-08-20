fn ast_try cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty parameters

 let r arr
 let code "try"
 let node obj code source
 let block call_ast_block_top cpl children source

 push r node
 append r block

 ret r
end