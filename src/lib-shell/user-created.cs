fn user_created x:obj
 var r x.created
 let home x.home
 let last_log x.last_log

 if is_str home
  let n fs_created home

  if is_null r
   assign r n
  else
   assign r min r n
 end

 if is_num last_log
  if is_null r
   assign r last_log
  else
   assign r min r last_log
 end

 ret r
end