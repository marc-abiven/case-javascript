function fs_remove(x)
{
 check(is_str,x)
 
 const force=true
 const recursive=true
 const o={force,recursive}
 
 fs.rmSync(x,o)
}
