fn expr_arr cpl:obj args:etc
 let fn partial call_expr_arg cpl
 let args map args fn
 let s join args ","

 ret bracket s
end
