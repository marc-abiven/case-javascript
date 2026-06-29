fn flower x
 if is_undef x
  let s repeat "*" tty_column

  log s

  ret
 end

 check is_str x

 let s1 repeat "*" tty_column
 let s2 repeat "*" 2
 let s2 concat s2 " "
 let s2 concat s2 x
 let s2 concat s2 " "
 let s2 concat s2 s1
 let s2 slice_l s2 tty_column

 log s2
end
