fn is_space x
 if not is_str x
  ret false

 if is_empty x
  ret false

 let s trim x

 ret is_empty s
end