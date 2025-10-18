fn match x:str y:str
 check is_str x
 check is_str y

 let s replace y "." "\\."
 let s replace s "*" ".*"
 let s concat "^" s "$"
 let s new RegExp s

 ret s.test x
end
