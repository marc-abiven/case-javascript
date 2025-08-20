fn call_ast_block cpl children source
 check is_obj cpl
 check is_arr children
 check is_obj source

 let r arr

 forof cpl_block cpl children
  let o dup v

  assign o.code indent o.code

  push r o
 end

 if not cpl_is_leaf cpl children
  let code "{"
  let open obj code source

  let code "}"
  let close obj code source

  unshift r open
  push r close
 end

 ret r
end