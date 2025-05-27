function dir_remove(x)
{
 check(is_str,x)
 
 const recursive=true
 const o={recursive}

 fs.rmdirSync(x,o)
}
