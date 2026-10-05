fn get x:obj y:str z
 if has x y
  ret inline "x[y]"

 if is_def z
  ret z

 stop
end
