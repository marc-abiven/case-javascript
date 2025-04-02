function is_comment(x)
{
 if(!is_ln(x))
  return false

 return match_l(x,"//")
}
