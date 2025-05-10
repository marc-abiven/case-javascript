function between(x,y,z)
{
 check(is_num,x)
 check(is_num,y)
 check(is_num,z)
 check(gte,z,y)
 
 if(lt(x,y))
  return false
  
 if(gt(x,z))
  return false
  
 return true
}
