fn mod x:num y:num z:etc
 //~ check is_num x
 //~ check is_num y
 check different y 0

 let r inline "x%y"

 if is_full z
  ret mod r z:etc

 ret r
end
