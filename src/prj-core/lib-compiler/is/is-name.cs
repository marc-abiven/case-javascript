fn is_name x
 if not is_str x
  ret false

 if is_identifier x
  ret true

 if is_access x
  ret true

 ret false
end

