fn random_str length:uint alnum
 if is_undef alnum
  ret random_str length true

 check is_bool alnum

 let chars ""
 let chars concat chars digit //global
 let chars concat chars lower
 let chars concat chars upper

 var range ushort_max
 var begin 0

 if alnum
  assign range chars.length
  assign begin front chars
  assign begin asc begin
 end

 let a arr

 while lt a.length length
  let n random range

  var c null

  if alnum
   assign c at chars n
  else
   assign c chr n

  push a c
 end

 ret implode a
end