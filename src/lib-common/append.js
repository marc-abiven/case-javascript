function append(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 
 for(const v of y)
 {
  push(x,v)
 }
}
