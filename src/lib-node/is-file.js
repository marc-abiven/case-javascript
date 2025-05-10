function is_file(x)
{
 if(!is_str(x))
  return false
 
 const throwIfNoEntry=false
 const o={throwIfNoEntry}
 const v=fs.statSync(x,o)
 
 if(is_undef(v))
  return false
 
 return v.isFile()
}
