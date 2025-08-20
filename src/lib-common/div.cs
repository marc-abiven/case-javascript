fn div x y z:etc
 check is_num x
 check is_num y
 check different y 0

 let r inline "x/y"

 if is_full z
  ret div r z:etc

 ret r
end