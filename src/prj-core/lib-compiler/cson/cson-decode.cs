//cson decode

fn cson_decode cson:str path cpl
 if is_def path
  check is_str path

 if is_undef cpl
  let cpl cpl_init "cson"

  ret cson_decode cson path cpl
 end

 //decode

 fn decode cpl:obj node:obj
  try
   check is_empty node.args

   let operator node.operator
   let children node.children

   //array

   if same operator "arr"
    let r arr

    for children
     let operator v.operator
     let args v.args

     check is_empty args

     //tree

     if is_tree operator
      let node decode cpl v

      push r node

      cont
     end

     //data

     if is_data operator
      check is_empty v.children

      let value decode_value operator

      push r value

      cont
     end

     //any

     stop
    end

    ret r
   end

   //object

   if same operator "obj"
    let r obj

    for children
     var key v.operator
     let args v.args

     if is_lit key
      assign key unwrap key

     //array by default

     var value null

     if is_empty args
      assign value "arr"
     elseif is_single args
      assign value front args
     else
      stop

     //tree

     if is_tree value
      let node copy v

      assign node.operator value
      clear node.args

      let t decode cpl node

      put r key t

      cont
     end

     //data

     if is_data value
      check is_empty v.children

      let value decode_value value

      put r key value

      cont
     end

     //any

     stop
    end

    ret r
   end

   //value

   ret decode_value operator
  catch e
   //set the error context

   unshift cpl.stack node

   throw e
  end
 end

 //decode value

 fn decode_value x:str
  if is_nullish x
   ret null

  if is_boolish x
   ret json_decode x

  if is_numeric x
   ret json_decode x

  if is_lit x
   ret unwrap x

  if is_name x
   ret x

  stop
 end

 //main

 cpl_clear cpl

 var nodes null

 if is_str path
  assign nodes cpl_load cpl path
 else
  assign nodes cpl_load_str cpl cson

 let nodes cpl_tokenize cpl nodes
 let nodes cpl_escape_lisp cpl nodes
 let nodes cpl_fold cpl nodes

 check is_single nodes

 let node front nodes

 //decode

 try
  ret decode cpl node
 catch e
  cpl_dump cpl

  throw e
 end
end