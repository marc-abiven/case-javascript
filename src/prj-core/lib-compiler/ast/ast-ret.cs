fn ast_ret cpl:obj args:arr children:arr source:obj
 //return with cson

 if is_full children
  //array as default

  var operator null

  if is_empty args
   assign operator "arr"
  else
   check is_single args

   assign operator front args
  end

  let args arr
  let node obj operator args children source
  let r cpl_cson cpl node

  //patch return

  let o front r //the keyword and the cson value must start at the same line

  assign o.code space "return" o.code

  ret r
 end

 //simple return

 var code ""

 if is_empty args
  assign code "return"
 else
  let right call_expr_right cpl args:etc

  assign code space "return" right
 end

 ret obj code source
end