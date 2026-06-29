fn expr_call cpl:obj x:name y:etc
 let fn partial call_expr_arg cpl
 let args map y fn
 let args join args ","
 let list paren args

 ret concat x list
end
