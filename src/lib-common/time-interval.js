function time_interval(x,y)
{
 check(is_fn,x)
 check(is_num,y)
 check(gte,y,0)
 
 const n=mul(y,1000)

 setInterval(x,n) 
}
