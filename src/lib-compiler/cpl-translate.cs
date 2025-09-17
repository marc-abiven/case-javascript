fn cpl_translate x:obj y:obj
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

 let operator y.operator
 let args y.args
 let children y.children
 let source y.source

 try
  ret translate x operator args children source
 catch e
  unshift x.stack y

  throw e
 end
end
