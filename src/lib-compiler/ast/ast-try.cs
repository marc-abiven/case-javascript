fn ast_try cpl:obj args:arr children:arr source:obj
 check is_empty args

 let r arr
 let code "try"
 let node obj code source
 let block call_ast_block_top cpl children source

 push r node
 append r block

 ret r
end
