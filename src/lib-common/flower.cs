fn flower x
 var n null
 
 if is_node
  assign n process.stdout.columns
 
  if is_undef n
   assign n 144
 elseif is_browser 
  assign n 80
 else
  stop
 
 if is_undef x
  let s repeat "*" n
  
  log s
  
  ret
 end
 
 check is_str x

 let s1 repeat "*" n
 let s2 repeat "*" 2 
 let s2 concat s2 " "
 let s2 concat s2 x
 let s2 concat s2 " "
 let s2 concat s2 s1
 let s2 slice_l s2 n

 log s2
end
