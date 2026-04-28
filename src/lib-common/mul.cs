fn mul x:num y:num z:etc
 let r inline "x*y"

 if is_full z
  ret mul r z:etc

 ret r
end
