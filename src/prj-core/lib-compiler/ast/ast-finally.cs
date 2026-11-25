fn ast_finally cpl:obj args:arr children:arr source:obj
 let r arr
 let block call_ast_block_top cpl children source
 let code "finally"
 let node obj code source

 push r node
 append r block

 ret r
end
