function head(x,y)
{
 check(is_arr,x)
 check(is_uint,y)
 
 if(lt(x.length,y))
  return dup(x)
  
 return slice_l(x,y)
}
