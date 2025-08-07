fn ssh_system x y:etc
 check is_str x
 
 let r ssh_pass x y:etc
 let a split r
 
 if is_full a
  log y:etc
  
  forof a
   log " >" v
  end
 end
 
 ret r
end
