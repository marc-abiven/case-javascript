fn is_interactive
 if not is_node
  ret false

 ret process.stdout.isTTY
end