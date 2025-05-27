function path_real(x)
{
 check(is_str,x)
 
 return fs.realpathSync(x)
}
