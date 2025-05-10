function dir_make(x)
{
 check(is_str,x)
 
 const recursive=true
 const o={recursive}

 fs.mkdirSync(x,o)
}
