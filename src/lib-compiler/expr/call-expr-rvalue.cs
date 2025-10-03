fn call_expr_rvalue cpl:obj x:etc
 let first front x

 if is_single x
  if same first "arr"
   ret expr_arr cpl
  elseif same first "obj"
   ret expr_obj cpl
  else
   ret first
 end

 let args slice x 1

 if has cpl.exprs first
  let fn get cpl.exprs first

  ret fn cpl args:etc
 end

 ret expr_call cpl x:etc
end
