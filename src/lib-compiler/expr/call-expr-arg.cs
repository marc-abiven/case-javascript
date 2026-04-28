fn call_expr_arg cpl:obj x:str
 if is_numeric x
  ret x

 if is_lit x
  ret x

 if is_identifier x
  ret x

 if is_access x
  ret x

 if is_tuple x
  let a unwrap x

  check is_pair a

  let name front a
  let etc back a

  check is_identifier name
  check same etc "etc"

  ret concat "..." name
 end

 let s to_lit x
 let message space "Invalid argument" s

 stop message
end
