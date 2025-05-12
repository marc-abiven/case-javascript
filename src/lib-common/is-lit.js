function is_lit(x)
{
 if(!is_str(x))
  return false
  
 if(!is_json(x))
  return false
  
 const v=json_decode(x)
 
 if(!is_str(v))
  return false
  
 const s=json_encode(v)
  
 return same(s,x)
} 
