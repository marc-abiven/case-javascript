fn call_expr_rvalue cpl:obj args:etc
 //simple value

 let first front args

 if is_single args
  if same first "arr"
   ret expr_arr cpl
  elseif same first "obj"
   ret expr_obj cpl
  else
   ret first
 end

 //operator

 let arguments slice args 1

 if has cpl.exprs first
  let fn get cpl.exprs first

  ret fn cpl arguments:etc
 end

 //call

 ret expr_call cpl args:etc
end
