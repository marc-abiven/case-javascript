fn cpl_for cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  let r arr

  for nodes
   if different v.operator "for"
    let node dup v

    assign node.children visit node.children
    push r node

    cont
   end

   let nodes generate v

   append r nodes
  end

  ret r
 end

 //generate

 fn generate node:obj
  let r arr
  let args node.args

  let operator "let"
  let args arr "_a" args:etc
  let children arr
  let source dup node.source
  let node2 obj operator args children source

  push r node2

  let operator "forin"
  let args arr "_a"
  let children visit node.children
  let source dup node.source
  let node3 obj operator args children source

  push r node3

  let operator "let"
  let args arr "v" "at" "_a" "i"
  let children arr
  let source dup node.source
  let node4 obj operator args children source

  unshift node3.children node4

  let operator "let"
  let args arr "i" "to_i" "k"
  let children arr
  let source dup node.source
  let node5 obj operator args children source

  unshift node3.children node5

  ret r
 end

 //main

 ret visit nodes
end
