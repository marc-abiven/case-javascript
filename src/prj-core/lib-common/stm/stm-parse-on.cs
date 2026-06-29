fn stm_parse_on on:fn
 let name strip_l on.name "stm_on_"
 let a split name "_"
 let status shift a
 let event join a "-"

 ret obj status event on
end