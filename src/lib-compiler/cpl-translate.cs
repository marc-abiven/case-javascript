fn cpl_translate cpl:obj node:obj
 //translate

 fn translate cpl:obj operator:str args:arr children:arr source:obj
  forin cpl.asts
   if different k operator
    cont

   let ast get cpl.asts k
   let r ast cpl args children source

   if is_arr r
    ret r

   check is_obj r

   ret arr r
  end

  let args arr operator args:etc
  let r ast_call cpl args children source

  if is_arr r
   ret r

  check is_obj r

  ret arr r
 end

 //main

 let operator node.operator
 let args node.args
 let children node.children
 let source node.source

 try
  ret translate cpl operator args children source
 catch e
  unshift cpl.stack node

  throw e
 end
end