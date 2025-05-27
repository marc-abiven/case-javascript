function file_read(x)
{  
 check(is_str,x)
 
 const o=fs.readFileSync(x)
 
 return o.toString()
}
