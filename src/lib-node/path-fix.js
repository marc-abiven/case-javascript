function path_fix(x)
{
 if(match_r(x,"/"))
  return x
  
 return concat(x,"/")
}
