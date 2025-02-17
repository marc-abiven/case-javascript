function find(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 
 for(const k in x)
 {
  const i=to_i(k)
  const v=at(x,i)
  
  if(same(v,y))
   return i
 }
 
 return -1
}
