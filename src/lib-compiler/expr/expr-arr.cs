fn expr_arr x:etc
 let args map x expr_arg
 let s join args ","
 
 ret bracket s
end
