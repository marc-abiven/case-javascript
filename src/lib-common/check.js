function check(x,...y)
{
 if(is_true(x))
 {
  if(is_empty(y))
   return
 }
 else if(is_fn(x))
 {
  const b=x(...y)

  if(is_true(b))
   return
 }

 stop()
}
