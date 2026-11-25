fn expr_call cpl:obj value:name args:etc
 let fn partial call_expr_arg cpl
 let args map args fn
 let args join args ","
 let list paren args

 ret concat value list
end
