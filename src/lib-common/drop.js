function drop(x,y)
{
 check(is_arr,x)

 if(is_undef(y))
  return drop(x,1)

 pop(x,y) 
}
