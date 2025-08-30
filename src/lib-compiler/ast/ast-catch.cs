fn ast_catch cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 let r arr
 let block call_ast_block_top cpl children source

 if is_empty args
  let code "catch"
  let node obj code source

  push r node
  append r block

  ret r
 end

 check is_single args

 let identifier front args

 check is_identifier identifier

 let code paren identifier
 let code concat "catch" code
 let node obj code source

 push r node
 append r block

 ret r
end
