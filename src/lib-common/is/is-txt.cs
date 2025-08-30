fn is_txt x
 if is_str x
  ret contain x "\n"

 ret false
end