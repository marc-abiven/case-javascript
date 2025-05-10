function match(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 let s=replace(y,".","\\.")
 
 s=replace(s,"*",".*")
 s=concat("^",s,"$")
 
 const o=new RegExp(s)
 
 return o.test(x)
}
