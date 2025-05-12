function is_fs(x)
{
 if(!is_str(x))
  return false
 
 const throwIfNoEntry=false
 const o={throwIfNoEntry}
 const v=fs.statSync(x,o)
 
 return is_def(v)
}
