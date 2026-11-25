fn expr_run cpl:obj args:etc
 let call expr_call cpl args:etc

 ret space "yield*" call
end
