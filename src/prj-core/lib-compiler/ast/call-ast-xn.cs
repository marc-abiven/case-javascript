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

 //get argument name

 fn get_argument_name x:str
  if is_identifier x
   ret x

  if is_tuple x
   let a unwrap x
   
   ret front a
  end

  stop
 end

 //main

 let r arr
 let name front args

 check is_identifier name

 let args slice args 1
 
 //check duplicated names
 
 let names map args get_argument_name

 for names
  let n count names v

  if same n 1
   cont
   
  let name to_lit v
  let message space "Argument" name "defined" n "times"

  stop message
 end

 let parameters map args get_argument
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
