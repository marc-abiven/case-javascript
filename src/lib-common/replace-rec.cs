fn replace_rec x:str y:str z:str
 //~ check is_str x
 //~ check is_str y
 //~ check is_str z

 var r x

 while contain r y
  assign r replace r y z
 end

 ret r
end
