fn cpl_compile cpl:obj path:str
 var nodes cpl_parse cpl path

 cpl_check_fn cpl nodes path

 try
  assign nodes cpl_check cpl nodes
  assign nodes cpl_for cpl nodes
  assign nodes cpl_scope cpl nodes
  assign nodes cpl_block cpl nodes
 catch e
  cpl_dump cpl

  throw e
 end

 ret nodes
end