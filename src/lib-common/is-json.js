function is_json(x)
{
 if(!is_str(x))
  return false

 if(is_empty(x))
  return false
  
 try
 {
  json_decode(x)
 }
 catch
 {
  return false
 }
  
 return true
}
