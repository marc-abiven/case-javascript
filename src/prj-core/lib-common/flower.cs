fn flower title character
 if is_undef title
  ret flower "" character

 if is_undef character
  ret flower title "*"

 if is_empty title
  let s repeat character tty_column

  log s

  ret
 end

 check is_str title

 let s1 repeat character tty_column
 let s2 repeat character 2
 let s2 concat s2 " "
 let s2 concat s2 title
 let s2 concat s2 " "
 let s2 concat s2 s1
 let s2 slice_l s2 tty_column

 log s2
end