fn expr_rvalue x:etc
 let first front x
 
 if is_single x
  if same first "arr"
   ret call expr_arr
  elseif same first "obj"
   ret call expr_obj
  else
   ret first
 end

 let args slice x 1
 
 if same first "call"
  ret expr_call args:etc
 elseif same first "run"
  ret expr_run args:etc
 elseif same first "arr"
  ret expr_arr args:etc
 elseif same first "obj"
  ret expr_obj args:etc
 elseif same first "new"
  ret expr_new args:etc
 elseif same first "in"
  ret expr_in args:etc
 elseif same first "instanceof"
  ret expr_instanceof args
 elseif same first "inline"
  ret expr_inline args:etc
 elseif same first "not"
  let rvalue expr_rvalue args:etc
  
  ret concat "!" rvalue
 else
  ret expr_call x:etc
end
