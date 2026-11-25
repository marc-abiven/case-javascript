fn add x:num y:num z:etc
 let r inline "x+y"

 if is_full z
  ret add r z:etc

 ret r
end
