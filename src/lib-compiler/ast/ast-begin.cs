fn ast_begin cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty parameters
 
 let r call_ast_block cpl children source
 
 if cpl_is_leaf cpl children
  check is_single r
  
  let node front r
  
  assign node.code trim node.code
 end
 
 ret r
end
