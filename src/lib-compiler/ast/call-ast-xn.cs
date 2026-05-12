fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str
 //get argument

 fn get_argument x:str
  if is_identifier x
   ret x

  if is_tuple x
   let a unwrap x

   check is_pair a

   let name front a
   let etc back a

   check is_identifier name
   check same etc "etc"

   ret concat "..." name
  end

  stop
 end

 //main

 let r arr
 let name front args

 check is_name name

 let args slice args 1
 let parameters map args get_argument

 for parameters
  let n count parameters v

  if same n 1
   cont

  let arg to_lit v
  let message space "Argument" arg "defined" n "times"

  stop message
 end

 let parameters join parameters ","
 let list paren parameters
 let code concat name list
 let code space keyword code
 let node obj code source
 let block call_ast_block_top cpl children source

 push r node
 append r block

 ret r
end