function path_concat(x,y)
{
 const s1=strip_r(x,"/")
 const s2=strip_l(y,"/")
 
 return concat(s1,"/",s2)
}
