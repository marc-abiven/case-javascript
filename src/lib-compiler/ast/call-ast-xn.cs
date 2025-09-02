fn call_ast_xn cpl args children source keyword
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source
 check is_str keyword

 fn get_argument x
  check is_str x

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

 let r arr
 let name front args

 check is_name name

 let args slice args 1
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