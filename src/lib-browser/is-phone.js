function is_phone()
{
 const agent=to_lower(navigator.userAgent)

 if(contain(agent,"iphone"))
  return true

 if(contain(agent,"android"))
  return true
  
 return false
}
