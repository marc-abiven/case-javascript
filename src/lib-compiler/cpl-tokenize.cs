fn cpl_tokenize x y
 check is_obj x
 check is_arr y
 
 let r arr

 forof y
  let code v.code
  let source dup v.source
  let indent str_indent code
  let parameters cpl_scan x code
  
  if is_empty parameters
   cont
   
  let operator shift parameters
  
  if same operator "end"
   if is_empty parameters
    cont
  end
  
  let children arr
  let node obj indent operator parameters children source
  
  push r node
 end
 
 ret r
end
