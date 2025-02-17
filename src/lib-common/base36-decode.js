function base36_decode(x)
{
 check(is_str,x)
 
 let r=""
 
 const a=explode(x)

 while(is_full(a))
 {
  const a2=slice_l(a,4)
  
  shift(a,4)
  
  const s=implode(a2)
  const n=Number.parseInt(s,36)
  const range=mul(256,256)
  
  check(is_uint,n)
  check(lte,n,range)
  
  const c=chr(n)
  
  r=concat(r,c)
 }
 
 return r
}
