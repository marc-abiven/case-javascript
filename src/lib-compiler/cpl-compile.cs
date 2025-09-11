fn cpl_compile x:obj y:str
 let nodes cpl_load x y
 
 if is_full nodes
  let fn path_file y
  let fn replace fn "-" "_"

  push x.fns fn
 end
 
 let nodes cpl_tokenize x nodes
 let nodes cpl_fold x nodes
 var nodes nodes

 try
  assign nodes cpl_check x nodes
  assign nodes cpl_for x nodes
  assign nodes cpl_scope x nodes
  assign nodes cpl_block x nodes
 catch e
  cpl_dump x

  throw e
 end
 
 append x.out nodes
end
