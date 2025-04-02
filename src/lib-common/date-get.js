function date_get(x)
{
 if(is_undef(x))
 {
  const n=time_get()
  
  return date_get(n)
 }
 
 check(is_num,x)
 
 const n=mul(x,1000)
 const o=new Date(n)
 const y=o.getFullYear()
 
 let m=o.getMonth()
 
 m=inc(m)
 
 const d=o.getDate()
 
 return concat(y,"/",m,"/",d)
}
