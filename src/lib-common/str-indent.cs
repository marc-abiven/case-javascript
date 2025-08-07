fn str_indent x
 check is_str x
 
 if is_blank x
  ret 0
  
 let s trim_l x
 
 ret sub x.length s.length
end
 
