fn cpl_scan x y
 check is_obj x
 check is_str y
 
 if has x.cache y
  ret get x.cache y
  
 let r scan y
 
 put x.cache y r
 
 ret r
end
