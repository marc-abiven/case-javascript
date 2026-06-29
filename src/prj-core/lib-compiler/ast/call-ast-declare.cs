fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str

 //declare with cson

 if is_full children
  let _args args
  let operator at args 1
  let args arr
  let node obj operator args children source
  let r cpl_cson cpl node

  //patch declare

  let name front _args
  let code concat keyword " " name "="
  let o obj code source

  unshift r o

  ret r
 end

 //simple declare

 let identifier front args

 check is_identifier identifier

 let code slice args 1
 let code call_expr_right cpl code:etc
 let code concat identifier "=" code
 let code space keyword code

 ret obj code source
end
