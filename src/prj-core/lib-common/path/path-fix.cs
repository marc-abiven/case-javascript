fn path_fix path:str
 if match_r path "/"
  ret path

 ret concat path "/"
end
