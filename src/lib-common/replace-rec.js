function replace_rec(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 
 let r=x

 while(contain(r,y))
 {
  r=replace(r,y,z)
 }
 
 return r
}
