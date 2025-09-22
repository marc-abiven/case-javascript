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

 //~ if same first "arr"
  //~ ret expr_arr cpl args:etc
 //~ elseif same first "call"
  //~ ret expr_call cpl args:etc
 //~ elseif same first "in"
  //~ ret expr_in cpl args:etc
 //~ elseif same first "inline"
  //~ ret expr_inline cpl args:etc
 //~ elseif same first "instanceof"
  //~ ret expr_instanceof cpl args:etc
 //~ elseif same first "new"
  //~ ret expr_new cpl args:etc
 //~ elseif same first "not"
  //~ ret expr_not cpl args:etc
 //~ elseif same first "obj"
  //~ ret expr_obj cpl args:etc
 //~ elseif same first "run"
  //~ ret expr_run cpl args:etc
 //~ elseif same first "value"
  //~ ret expr_value cpl args:etc
 //~ else
  //~ ret expr_call cpl x:etc
end