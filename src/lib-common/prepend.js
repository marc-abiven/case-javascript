function prepend(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 
 const a=dup(y)
 
 reverse(a)
 
 for(const v of a)
 {
  unshift(x,v)
 }
}
