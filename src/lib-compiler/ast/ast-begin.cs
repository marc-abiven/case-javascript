fn ast_begin cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty args

 let r call_ast_block cpl children source

 if cpl_is_leaf cpl children
  check is_single r

  let node front r

  assign node.code trim node.code
 end

 ret r
end