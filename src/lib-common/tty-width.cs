fn tty_width
 if is_node
  if is_batch
   ret 140

  let r process.stdout.columns

  check is_uint r

  ret r
 elseif is_browser
  ret 80
 else
  stop
end