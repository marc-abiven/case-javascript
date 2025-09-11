fn find x:arr y:def
 //~ check is_arr x
 //~ check is_def y

 let value y

 fn match x
  ret same x value
 end

 ret x.findIndex match
end
