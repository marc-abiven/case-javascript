fn cpl_scope x y
 check is_obj x
 check is_arr y

 fn is_declare x
  if same x "let"
   ret true

  if same x "var"
   ret true

  ret false
 end

 let r arr
 let a dup y

 while is_full a
  let node shift a
  let operator node.operator
  let parameters node.parameters
  let source node.source
  let declare operator

  var name null
  var rvalue null

  if is_full parameters
   assign name front parameters
   assign rvalue slice parameters 1
  end

  if is_declare operator
   check is_str name
   check is_arr rvalue

   let operator "let"
   let parameters arr "_" rvalue:etc
   let children arr
   let node2 obj operator parameters children source

   push r node2

   let operator "begin"
   let parameters arr
   let children arr
   let node3 obj operator parameters children source

   push r node3

   let operator declare
   let parameters arr name "_"
   let children arr
   let node4 obj operator parameters children source

   push node3.children node4

   let operator "begin"
   let parameters arr
   let children cpl_scope x a
   let node5 obj operator parameters children source

   push node3.children node5

   clear a
  else
   let children cpl_scope x node.children
   let node obj operator parameters children source

   push r node
  end
 end

 ret r
end