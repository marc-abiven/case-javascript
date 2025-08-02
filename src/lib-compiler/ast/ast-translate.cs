fn ast_translate x y
 check is_obj x
 check is_obj y
 
 fn translate x y z a
  check is_obj x
  check is_str y
  check is_arr z
  check is_arr a
  
  if same y "begin"
   ret ast_begin x z a
  elseif same y "let"
   ret ast_let x z a
  elseif same y "var"
   ret ast_var x z a
  elseif same y "fn"
   ret ast_fn x z a
  elseif same y "gn"
   ret ast_gn x z a
  elseif same y "ret"
   ret ast_ret x z a
  elseif same y "if"
   ret ast_if x z a
  elseif same y "elseif"
   ret ast_elseif x z a
  elseif same y "else"
   ret ast_else x z a
  elseif same y "while"
   ret ast_while x z a
  elseif same y "brk"
   ret ast_brk x z a
  elseif same y "cont"
   ret ast_cont x z a
  elseif same y "throw"
   ret ast_throw x z a
  elseif same y "try"
   ret ast_try x z a
  elseif same y "catch"
   ret ast_catch x z a
  elseif same y "check"
   ret ast_check x z a
  elseif same y "assign"
   ret ast_assign x z a
  elseif same y "inline"
   ret ast_inline x z a
  elseif same y "forof"
   ret ast_forof x z a
  elseif same y "forin"
   ret ast_forin x z a
  elseif same y "fornum"
   ret ast_fornum x z a
  elseif same y "call"
   ret ast_call x z a
  elseif same y "yield"
   ret ast_yield x z z
  elseif same y "run"
   ret ast_run x z a
  else
   let call arr y z:etc
   
   ret ast_call x call a
  end
 end

 let operator y.operator
 let parameters y.parameters
 let children y.children
 
 try
  ret translate x operator parameters children
 catch e 
  let s to_lit operator
  
  log "operator" s
  
  if is_full parameters
   log " parameters" parameters:etc
  
  throw e
 end
end
