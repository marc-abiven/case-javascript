fn is_relative x
 if not is_str x
  ret false

 ret not is_absolute x
end