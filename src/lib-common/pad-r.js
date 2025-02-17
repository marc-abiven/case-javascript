function pad_r(x,y,z)
{
 check(is_cool,x)

 if(is_uint(x))
 {
  const s=to_str(x)
  
  if(is_undef(y))
  {
   if(is_undef(z))
    return pad_r(s,"0",3)

   return pad_r(s,"0",z)
  }
  
  return pad_r(s,y,z)
 }

 check(is_str,x)
 check(is_str,y)
 check(is_uint,z)

 return x.padEnd(z,y)
}

