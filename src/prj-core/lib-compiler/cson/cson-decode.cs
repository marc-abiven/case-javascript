//cson decode

fn cson_decode cson:str path
 if is_def path
  check is_str path

 //decode

 fn decode cpl:obj node:obj
  try
   check is_empty node.args

   let operator node.operator
   let children node.children

   check is_empty node.args

   if same operator "arr"
    //array

    let r arr

    for children
     let operator v.operator
     let args v.args

     check is_empty args

     if is_tree operator
      //tree

      let node decode cpl v

      push r node
     elseif is_data operator
      //data

      let value decode_value operator

      push r value
     else
      stop
    end

    ret r
   elseif same operator "obj"
    //object

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

     if is_tree value
      //tree

      let node copy v

      assign node.operator value
      clear node.args

      let t decode cpl node

      put r key t
     elseif is_data value
      //data

      let value decode_value value

      put r key value
     else
      stop
    end

    ret r
   else
    //value

    ret decode_value operator
   end
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

 let cpl cpl_init "cson"

 //parse

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

 //no cpl_deinit call
 //do not update the cache with data code
end