//cpl cson

//compile cs object notation nodes

fn cpl_cson cpl:obj node:obj
 check is_empty node.args

 //compile

 fn compile node:obj
  let r arr
  let operator node.operator
  let children node.children
  let source node.source

  //short version for empty tree nodes

  if is_tree operator
   if is_empty children
    var code ""

    if same operator "arr"
     assign code "[]"
    elseif same operator "obj"
     assign code "{}"
    else
     stop

    let source dup source
    let o obj code source

    push r o

    ret r
   end
  end

  //array

  if same operator "arr"
   //open

   let code "["
   let source dup source
   let o obj code source

   push r o

   //children

   for children
    let args v.args

    if is_full args
     let value front args
     let message space "Unexpected value" value "as an array element"

     stop message
    end

    let operator v.operator

    if is_tree operator
     //tree

     let a cpl_cson cpl v
     let a indent_nodes a

     append r a
    elseif is_data operator
     //data

     check is_empty v.children

     let code concat " " operator //indent
     let source dup v.source
     let o obj code source

     push r o
    else
     stop

    //comma

    if not is_last children i
     let o back r

     assign o.code concat o.code ","
    end
   end

   //close

   let code "]"
   let source dup source
   let o obj code source

   push r o

   ret r
  end

  //object

  if same operator "obj"
   //open

   let code "{"
   let source dup source
   let o obj code source

   push r o

   //children

   let keys arr

   for children
    let args dup v.args

    //array by default

    if is_empty args
     push args "arr"
    else
     check is_single args

    //key

    let key v.operator

    check is_key_str key

    //duplicate keys

    var key_content key

    if is_lit key_content
     let s unwrap key_content

     if is_name s
      assign key_content s
    end

    if contain keys key_content
     let key to_lit key_content
     let message space "The key" key "is duplicated"

     stop message
    end

    push keys key_content

    //value

    let value front args

    if is_tree value
     //tree

     let o dup v
     let s front args

     assign o.operator s
     clear o.args

     let a cpl_cson cpl o
     let a indent_nodes a
     let code concat " " key ":"
     let source dup source
     let o obj code source

     push r o
     append r a
    elseif is_data value
     //data

     let code concat " " key ":" value //indent
     let source dup v.source
     let node obj code source

     push r node
    else
     stop

    //comma

    if not is_last children i
     let node back r

     assign node.code concat node.code ","
    end
   end

   //close

   let code "}"
   let source dup source
   let node obj code source

   push r node

   ret r
  end

  //any

  stop "Expecting a container for a declare clause"
 end

 //indent nodes

 fn indent_nodes x:arr
  let r dup x

  for r
   assign v.code concat " " v.code
  end

  ret r
 end

 //is key str

 fn is_key_str x
  if not is_str x
   ret false

  if is_identifier x
   ret true

  if is_numeric x
   ret true

  if is_lit x
   ret true

  ret false
 end

 //main

 try
  ret compile node
 catch e
  //set the error context

  unshift cpl.stack node

  throw e
 end
end