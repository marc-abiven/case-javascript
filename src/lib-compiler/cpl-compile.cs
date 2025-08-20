fn cpl_compile x y
 check is_obj x
 check is_str y

 let nodes cpl_load x y
 let nodes cpl_tokenize x nodes
 let nodes cpl_fold x nodes
 var nodes cpl_scope x nodes

 try
  assign nodes cpl_block x nodes
 catch e
  cpl_dump x

  throw e
 end

 append x.out nodes
end