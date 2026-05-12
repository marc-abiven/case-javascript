fn node_context
 let r arr

 if gt verbose 0
  push r "--verbose"
 elseif lt verbose 0
  push r "--quiet"

 if is_color
  push r "--color"

 if not log_file
  push r "--no-log"

 ret r
end
