fn is_cson x
 if not is_str x
  ret false

 if is_empty x
  ret false

 try
  cson_decode x
 catch
  ret false
 end

 ret true
end