fn cmp x y
 check is_def x
 check is_def y
 
 if inline "x>y"
  ret 1

 if inline "x<y"
  ret -1
 
 ret 0
end
