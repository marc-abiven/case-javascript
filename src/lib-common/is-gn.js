function is_gn(x)
{
 const s=typeof x
 
 if(different(s,"function"))
  return false
  
 if(different(x.constructor.name,"GeneratorFunction"))
  return false
 
 return true
}
