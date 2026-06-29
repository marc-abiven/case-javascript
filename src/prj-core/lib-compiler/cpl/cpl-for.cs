fn cpl_for cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  let r arr

  for nodes
   //for

   if same v.operator "for"
    let nodes generate_for v

    append r nodes

    cont
   end

   //forin

   if same v.operator "forin"
    let nodes generate_forin v

    append r nodes

    cont
   end

   //any

   let node copy v

   assign node.children visit node.children
   push r node

   cont
  end

  ret r
 end

 //generate for

 fn generate_for node:obj
  let r arr
  let args node.args

  //array

  let operator "let"
  let args arr "iter" args:etc
  let children arr
  let source dup node.source
  let node2 obj operator args children source

  push r node2

  //forin

  let operator "forin"
  let args arr "iter"
  let children visit node.children
  let source dup node.source
  let node3 obj operator args children source

  push r node3

  //value

  let operator "let"
  let args arr "v" "at" "iter" "i"
  let children arr
  let source dup node.source
  let node4 obj operator args children source

  unshift node3.children node4

  //index

  let operator "let"
  let args arr "i" "to_i" "k"
  let children arr
  let source dup node.source
  let node5 obj operator args children source

  unshift node3.children node5

  ret r
 end

 //generate forin

 fn generate_forin node:obj
  let r arr
  let args node.args

  //array

  let operator "let"
  let args arr "iter" args:etc
  let children arr
  let source dup node.source
  let node2 obj operator args children source

  push r node2

  //forin

  let operator "forin"
  let args arr "iter"
  let children visit node.children
  let source dup node.source
  let node3 obj operator args children source

  push r node3

  //value

  let operator "let"
  let args arr "v" "iter_get" "iter" "k"
  let children arr
  let source dup node.source
  let node4 obj operator args children source

  unshift node3.children node4

  ret r
 end

 //main

 ret visit nodes
end
