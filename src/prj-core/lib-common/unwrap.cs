fn unwrap x:str
 //literal

 if is_lit x
  ret json_decode x

 //access

 if is_access x
  ret split x "."

 //tuple

 if is_tuple x
  ret split x ":"

 //any

 stop
end