fn cpl_translate x y
 check is_obj x
 check is_obj y
 
 fn translate x y z a
  check is_obj x
  check is_str y
  check is_arr z
  check is_arr a
  
  forin x.asts
   if different k y
    cont

   let v get x.asts k

   ret v x z a
  end

  let call arr y z:etc
   
  ret ast_call x call a
 end
 
 let operator y.operator
 let parameters y.parameters
 let children y.children
 
 try
  ret translate x operator parameters children
 catch e
  unshift x.stack y
  
  throw e
 end
end
