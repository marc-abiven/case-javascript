fn replace_rec x:str y:str z:str
 var r x

 while contain r y
  assign r replace r y z
 end

 ret r
end
