fn sub x:num y:num z:etc
 let r inline "x-y"

 if is_full z
  ret sub r z:etc

 ret r
end
