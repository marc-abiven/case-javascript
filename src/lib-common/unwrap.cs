fn unwrap x
 check is_str x
 
 if is_lit x
  ret json_decode x
  
 if is_access x
  ret split x "."

 if is_tuple x
  let r arr
  
  forof scan x is_member is_word
   if is_member v
    push r v
   elseif same v ":"
   else
    stop
  end
  
  ret r  
 end
 
 stop
end
