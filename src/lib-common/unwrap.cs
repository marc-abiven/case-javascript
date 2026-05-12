fn unwrap x:str
 if is_lit x
  ret json_decode x

 if is_access x
  ret split x "."

 if is_tuple x
  ret split x ":"

 stop
end
