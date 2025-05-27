function to_dump(x)
{
 check(is_def,x)
 
 return JSON.stringify(x,null,1)
}
