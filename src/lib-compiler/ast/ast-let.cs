fn ast_let x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_many y
 check is_empty z
 
 let s call_ast_declare x y z
 
 ret space "const" s
end
