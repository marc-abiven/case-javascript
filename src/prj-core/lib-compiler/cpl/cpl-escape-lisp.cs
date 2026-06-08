fn cpl_escape_lisp cpl:obj nodes:arr
 let r arr

 for nodes
  let node copy v
  let operator node.operator

  if is_lisp operator
   assign node.operator to_lit operator

  let args node.args

  for args
   if is_lisp v
    let s to_lit v

    at args i s
  end

  push r node
 end

 ret r
end