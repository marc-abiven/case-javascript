fn path_fix x:str
 if match_r x "/"
  ret x

 ret concat x "/"
end
