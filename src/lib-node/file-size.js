function file_size(x)
{
 check(is_str,x)
 
 const v=fs.statSync(x)
 
 return v.size
}
