fn is_ansi x
 if not is_str x
  ret false

 if is_empty x
  ret false

 let s ansi_strip x

 ret is_empty s
end