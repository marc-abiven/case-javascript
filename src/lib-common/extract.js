function extract(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 
 let r=false
 
 const a=dup(x)
 
 clear(x)
 
 for(const v of a)
 {
  if(same(v,y))
   r=true
  else
   push(x,v)
 }
 
 return r
}
