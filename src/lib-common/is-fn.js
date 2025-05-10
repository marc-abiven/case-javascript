function is_fn(x)
{
 const s=typeof x
 
 if(different(s,"function"))
  return false
  
 if(same(x.constructor.name,"GeneratorFunction"))
  return false
 
 return true
}
