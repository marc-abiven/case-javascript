function get(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 check(has,x,y)
 
 return x[y]
}
