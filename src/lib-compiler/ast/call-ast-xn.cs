fn call_ast_xn x y z a
 check is_obj x
 check is_arr y
 check is_arr z
 check is_str a
 
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

 let name front y
 
 check is_name name
 
 let parameters slice y 1 
 let args map parameters get_argument
 let args join args ","
 let list paren args
 let call concat name list
 let xn space a call
 let block ast_block x z
 
 ret concat xn "\n" block
end
