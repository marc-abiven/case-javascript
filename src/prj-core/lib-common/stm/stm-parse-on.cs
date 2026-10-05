fn stm_parse_on stm:obj on:xn
 let name strip_l on.name stm.prefix
 let a split name "_"
 let status shift a
 let event join a "-"

 ret obj status event on
end
