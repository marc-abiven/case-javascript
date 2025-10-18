fn cpl_is_leaf cpl:obj nodes:arr
 if not is_single nodes
  ret false

 let node front nodes
 let operator node.operator

 if cpl_is_call cpl operator
  ret true

 let operators arr "brk" "check" "cont" "inline" "ret" "run" "throw" "yield"

 ret contain operators operator
end
