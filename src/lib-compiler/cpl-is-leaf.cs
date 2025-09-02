fn cpl_is_leaf x y
 check is_obj x
 check is_arr y

 if not is_single y
  ret false

 let node front y
 let operator node.operator

 if cpl_is_call x operator
  ret true

 let operators arr "brk" "check" "cont" "inline" "ret" "run" "throw" "yield"

 ret contain operators operator
end