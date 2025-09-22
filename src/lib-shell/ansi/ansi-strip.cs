fn ansi_strip x:str
 var input x
 var output ""
 let escape chr 27
 let open concat escape "["
 let at asc "@"
 let tilde asc "~"
 
 while is_full input
  let n1 find input open
  
  if lt n1 0
   assign output concat output input
   
   brk
  end

  let n2 add n1 open.length
  let before slice_l input n1

  assign input slice input n2
  assign output concat output before

  while is_full input
   let c front input
   
   assign input slice input 1  
   
   let n asc c
   
   if between n at tilde
    brk
  end
 end

 ret output
end
