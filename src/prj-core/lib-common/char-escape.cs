fn char_escape x:char
 let r asc x
 let r to_hex r
 let r pad_l r "0" 4
 let r concat "\\u" r

 ret r
end
