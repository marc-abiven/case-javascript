function is_container(x)
{
 if(is_arr(x))
  return true
  
 if(is_obj(x))
  return true
  
 return false
}
