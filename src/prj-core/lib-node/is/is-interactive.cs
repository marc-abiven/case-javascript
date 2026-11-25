fn is_interactive
 //node

 if is_node
  ret process.stdout.isTTY

 //browser

 if is_browser
  ret true

 //any

 ret false
end