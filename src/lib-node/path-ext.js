function path_ext(x)
{
 check(is_str,x)
 
 const s=path.extname(x)
 
 return strip_l(s,".")
}
