function set(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 check(is_def,z)
 
 x[y]=z
}
