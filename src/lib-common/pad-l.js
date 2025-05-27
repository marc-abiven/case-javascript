function pad_l(x,y,z)
{
 check(is_cool,x)

 if(is_uint(x))
 {
  const s=to_json(x)
  
  if(is_undef(y))
  {
   if(is_undef(z))
    return pad_l(s,"0",3)

   return pad_l(s,"0",z)
  }

  return pad_l(s,y,z)
 }

 check(is_str,x)
 check(is_str,y)
 check(is_uint,z)

 return x.padStart(z,y)
}
