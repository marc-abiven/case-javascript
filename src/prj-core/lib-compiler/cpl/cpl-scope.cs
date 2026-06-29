fn cpl_scope cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  let r arr
  let nodes dup nodes

  while is_full nodes
   let node shift nodes
   var a null

   try
    assign a resolve node nodes
   catch e
    //set the error context

    unshift cpl.stack node

    throw e
   end

   append r a
  end

  ret r
 end

 //resolve

 fn resolve node:obj rest:arr
  let r arr
  let operator node.operator
  let args node.args
  let source node.source
  let declare operator

  if is_node_cson operator args node.children
   //cson

   let _children arr

   let name front args
   let construct at args 1

   let operator declare
   let args arr name construct
   let children copy node.children
   let node2 obj operator args children source

   push _children node2

   //rest

   if is_full rest
    let operator "begin"
    let args arr
    let children visit rest
    let node3 obj operator args children source

    push _children node3

    clear rest
   end

   //enclosing scope

   let operator "begin"
   let args arr
   let children _children
   let node obj operator args children source

   push r node

   ret r
  elseif is_declare operator
   //declare

   let name front args
   let rvalue slice args 1

   check is_str name
   check is_arr rvalue
   check is_full rvalue

   //right

   let operator "let"
   let args arr "_" rvalue:etc
   let children arr
   let node2 obj operator args children source

   push r node2

   //block

   let operator "begin"
   let args arr
   let children arr
   let node3 obj operator args children source

   push r node3

   //declare

   let operator declare
   let args arr name "_"
   let children visit node.children
   let node4 obj operator args children source

   push node3.children node4

   //rest

   if is_full rest
    let operator "begin"
    let args arr
    let children visit rest
    let node5 obj operator args children source

    push node3.children node5

    clear rest
   end

   ret r
  elseif is_node_for operator
   //for

   let operator "let"
   let args arr "_" args:etc
   let children arr
   let node2 obj operator args children source

   push r node2

   //block

   let operator "begin"
   let args arr
   let children arr
   let node3 obj operator args children source

   push r node3

   //declare

   let operator declare
   let args arr "_"
   let children visit node.children
   let node4 obj operator args children source

   push node3.children node4

   //rest

   if is_full rest
    let operator "begin"
    let args arr
    let children visit rest
    let node5 obj operator args children source

    push node3.children node5

    clear rest
   end

   ret r
  end

  let children visit node.children
  let node obj operator args children source

  push r node

  ret r
 end

 //is node cson

 fn is_node_cson operator:str args:arr children:arr
  if not is_declare operator
   ret false

  if different args.length 2
   ret false

  let construct at args 1

  if same construct "arr"
  elseif same construct "obj"
  else
   ret false

  if is_empty children
   ret false

  ret true
 end

 //is node for

 fn is_node_for operator
  if same operator "forof"
   ret true

  if same operator "forin"
   ret true

  if same operator "fornum"
   ret true

  ret false
 end

 //main

 ret visit nodes
end