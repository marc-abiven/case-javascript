fn path_fix x
 check is_str x

 if match_r x "/"
  ret x

 ret concat x "/"
end