fn xor x:num y:num z:etc
 let r inline "x^y"

 if is_full z
  ret xor r z:etc

 ret r
end
