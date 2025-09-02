fn tty_width
 if is_node
  if is_batch
   ret 140

  ret process.stdout.columns
 elseif is_browser
  ret 80
 else
  stop
end