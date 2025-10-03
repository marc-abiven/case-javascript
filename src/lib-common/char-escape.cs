fn char_escape x:char
 let r json_encode x
 let r strip_l r "\""
 let r strip_r r "\""

 ret r
end