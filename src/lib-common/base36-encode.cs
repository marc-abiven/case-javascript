fn base36_encode x
 check is_str x
 
 var r ""
 
 forof x
  let s asc v
  let s s.toString 36
  let s pad_l s "0" 4
  
  assign r concat r s
 end
 
 ret r
end
