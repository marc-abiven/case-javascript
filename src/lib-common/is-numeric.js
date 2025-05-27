function is_numeric(x)
{
 if(!is_str(x))
  return false
  
 if(!is_json(x))
  return false
  
 const v=json_decode(x)
 
 if(!is_num(v))
  return false

 const s=json_encode(v)
  
 return same(s,x)
} 
