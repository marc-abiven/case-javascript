fn iif x:bool y:def z:def
 //~ check is_bool x
 //~ check is_def y
 //~ check is_def z

 if x
  ret y

 ret z
end
