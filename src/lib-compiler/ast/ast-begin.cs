fn ast_begin cpl:obj args:arr children:arr source:obj
 check is_empty args

 let r call_ast_block cpl children source

 if cpl_is_leaf cpl children
  check is_single r

  let node front r

  assign node.code trim node.code
 end

 ret r
end
