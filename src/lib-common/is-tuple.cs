fn is_tuple x
 if not is_str x
  ret false

 if is_empty x
  ret false
  
 let a scan x is_member is_word
 
 if is_single a
  ret false  
 
 forof a
  if is_member v
   cont
  
  if same v ":"
   cont
   
  ret false
 end
 
 ret true
end

//~ function is_tuple(x)
//~ {
 //~ if(!is_str(x))
  //~ return false

 //~ if(is_empty(x))
  //~ return false
  
 //~ const a=scan(x,is_member)
 
 //~ if(is_single(a))
  //~ return false  
 
 //~ const s=shift(a)
 
 //~ if(!is_member(s))
  //~ return false  
  
 //~ while(is_full(a))
 //~ {
  //~ let s=shift(a)
  
  //~ if(different(s,":"))
   //~ return false
   
  //~ if(is_empty(a))
   //~ return false

  //~ s=shift(a)

  //~ if(!is_member(s))
   //~ return false
 //~ }
 
 //~ return true
//~ }
