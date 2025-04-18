function base36_encode(x)
{
 check(is_str,x)
 
 let r=""
 
 for(const v of x)
 {
  const n=asc(v)

  let s=n.toString(36)
  
  s=pad_l(s,"0",4)
  
  r=concat(r,s)
 }
 
 return r
}
