fn find x:arr y:def
 let value y

 fn match x
  ret same x value
 end

 ret x.findIndex match
end
