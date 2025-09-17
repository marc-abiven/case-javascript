fn cpl_compile x:obj path:str
 let nodes cpl_load x path 
 let nodes cpl_tokenize x nodes
 let nodes cpl_fold x nodes

 cpl_check_fn x nodes path

 let nodes cpl_check x nodes
 var nodes cpl_for x nodes
 
 try
  assign nodes cpl_scope x nodes
 catch e
  cpl_dump x

  throw e
 end

 let nodes cpl_block x nodes
 
 ret nodes
end
