fn call_ast_xn cpl parameters children source keyword
 check is_obj cpl
 check is_arr parameters
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
 let name front parameters
 
 check is_name name
 
 let parameters slice parameters 1 
 let args map parameters get_argument
 let args join args ","
 let list paren args
 let code concat name list
 let code space keyword code
 let node obj code source 
 let block call_ast_block_top cpl children source
 
 push r node
 append r block
 
 ret r
end
