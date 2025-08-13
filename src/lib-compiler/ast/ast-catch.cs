fn ast_catch cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 let r arr
 let block call_ast_block_top cpl children source
 
 if is_empty parameters
  let code "catch"
  let node obj code source
  
  push r node
  append r block
  
  ret r
 end
 
 check is_single parameters
 
 let identifier front parameters
 
 check is_identifier identifier
 
 let code paren identifier
 let code concat "catch" code
 let node obj code source
  
 push r node
 append r block
  
 ret r
end
