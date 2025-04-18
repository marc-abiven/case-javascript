function is_dir(x)
{
 if(!is_str(x))
  return false
 
 const throwIfNoEntry=false
 const o={throwIfNoEntry}
 const v=fs.statSync(x,o)
 
 if(is_undef(v))
  return false
 
 return v.isDirectory()
}
