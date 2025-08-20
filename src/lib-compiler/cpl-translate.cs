fn cpl_translate x y
 check is_obj x
 check is_obj y

 fn translate cpl operator parameters children source
  check is_obj cpl
  check is_str operator
  check is_arr parameters
  check is_arr children
  check is_obj source

  forin cpl.asts
   if different k operator
    cont

   let ast get cpl.asts k
   let r ast cpl parameters children source

   if is_arr r
    ret r

   check is_obj r

   ret arr r
  end

  let parameters arr operator parameters:etc
  let r ast_call cpl parameters children source

  if is_arr r
   ret r

  check is_obj r

  ret arr r
 end

 let operator y.operator
 let parameters y.parameters
 let children y.children
 let source y.source

 try
  ret translate x operator parameters children source
 catch e
  unshift x.stack y

  throw e
 end
end