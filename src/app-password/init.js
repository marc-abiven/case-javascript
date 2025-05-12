function init(...x)
{
 function password()
 {
  const a=arr()
    
  for(let i=0;i<10;i++)
  {
   const s=random_36()
   
   push(a,s)
  }
  
  const s=implode(a)
  
  return concat(s,"-?")
 }
 
 function random_36()
 {
  const n=random(36)
  
  if(lt(n,10))
  {
   const base=asc("0")   
   const ascii=add(base,n)
   
   return chr(ascii)
  }
  
  const letter=sub(n,10)
  const base=asc("a")   
  const ascii=add(base,letter)
   
  return chr(ascii)
 }
 
 function is_valid(x)
 {
  if(!is_str(x))
   return false
   
  let alpha=false
  let digit=true
   
  for(const v of x)
  {
   if(is_alpha(v))
    alpha=true
   else if(is_digit(v))
    digit=true
  }
  
  if(!alpha)
   return false
   
  if(!digit)
   return false
  
  return true
 }
 
 while(true)
 {
  const s=password()
  
  if(is_valid(s))
  {
   log(s)
   
   return
  }
 }
}
