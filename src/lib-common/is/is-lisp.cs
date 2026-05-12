fn is_lisp x
 if not is_str x
  ret false

 let a split x "-"

 ret every a is_alnum
end