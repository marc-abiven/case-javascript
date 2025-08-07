fn cpl_compile x y
 check is_obj x
 check is_str y
 
 let cpl x
 
 fn scan x
  check is_str x
  
  ret cpl_scan cpl x
 end
  
 let nodes app_parse y scan 
 let nodes cpl_scope x nodes
 
 try
  ret cpl_block x nodes
 catch e
  cpl_dump x
  
  throw e
 end
end
