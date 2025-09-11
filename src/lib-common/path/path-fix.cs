fn path_fix x:str
 //~ check is_str x

 if match_r x "/"
  ret x

 ret concat x "/"
end
