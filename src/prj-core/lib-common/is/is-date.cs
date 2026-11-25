fn is_date x
 if not is_str x
  ret false

 if is_trimmable x
  ret false

 try
  date_decode x
 catch
  ret false
 end

 ret true
end