fn cpl_compile cpl:obj path:str
 let nodes cpl_load cpl path
 let nodes cpl_tokenize cpl nodes
 let nodes cpl_fold cpl nodes

 cpl_check_fn cpl nodes path

 let nodes cpl_check cpl nodes
 var nodes cpl_for cpl nodes

 try
  assign nodes cpl_scope cpl nodes
  assign nodes cpl_block cpl nodes
 catch e
  cpl_dump cpl

  throw e
 end

 ret nodes
end
