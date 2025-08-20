fn tty_width
 if is_node
  let r process.stdout.columns

  if is_undef r
   ret 140

  ret r
 elseif is_browser
  ret 80
 else
  stop
end