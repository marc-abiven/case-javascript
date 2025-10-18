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

  if is_declare operator
   let name front args
   let rvalue slice args 1

   check is_str name
   check is_arr rvalue
   check is_full rvalue

   let operator "let"
   let args arr "_" rvalue:etc
   let children arr
   let node2 obj operator args children source

   push r node2

   let operator "begin"
   let args arr
   let children arr
   let node3 obj operator args children source

   push r node3

   let operator declare
   let args arr name "_"
   let children arr
   let node4 obj operator args children source

   push node3.children node4

   if is_full rest
    let operator "begin"
    let args arr
    let children visit rest
    let node5 obj operator args children source

    push node3.children node5

    clear rest
   end

   ret r
  elseif is_for operator
   let operator "let"
   let args arr "_" args:etc
   let children arr
   let node2 obj operator args children source

   push r node2

   let operator "begin"
   let args arr
   let children arr
   let node3 obj operator args children source

   push r node3

   let operator declare
   let args arr "_"
   let children visit node.children
   let node4 obj operator args children source

   push node3.children node4

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

 //is declare

 fn is_declare operator
  if same operator "let"
   ret true

  if same operator "var"
   ret true

  ret false
 end

 //is for

 fn is_for operator
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
