fn is_lit x
 if not is_str x
  ret false

 if not is_json x
  ret false

 let v json_decode x

 if not is_str v
  ret false

 let s json_encode v

 ret same s x
end