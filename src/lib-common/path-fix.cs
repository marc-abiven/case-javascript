fn path_fix x
 if match_r x "/"
  ret x
  
 ret concat x "/"
end
