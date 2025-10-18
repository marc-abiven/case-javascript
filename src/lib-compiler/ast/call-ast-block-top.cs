fn call_ast_block_top cpl:obj children:arr source:obj
 let r arr

 for cpl_block cpl children
  let o dup v

  assign o.code txt_indent o.code

  push r o
 end

 let code "{"
 let open obj code source

 let code "}"
 let close obj code source

 unshift r open
 push r close

 ret r
end
