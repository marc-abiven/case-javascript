fn dom_by_tag x
 check is_str x
 
 let r arr
 let collection document.getElementsByTagName x
 
 fornum collection.length
  let node collection.item i
  
  push r node
 end
 
 ret r
end
