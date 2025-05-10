function flower(x)
{
 check(is_str,x)
 
 const n=process.stdout.columns
 
 let s1=repeat("*",n)
 let s2=repeat("*",2)
 
 s2=concat(s2," ")
 s2=concat(s2,x)
 s2=concat(s2," ")
 s2=concat(s2,s1)
 s2=slice_l(s2,n)

 log(s2)
}
