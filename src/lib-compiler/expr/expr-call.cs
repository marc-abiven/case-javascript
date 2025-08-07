fn expr_call x y:etc
 check is_name x
 
 let args map y expr_arg
 let args join args ","
 let list paren args
 
 ret concat x list
end
