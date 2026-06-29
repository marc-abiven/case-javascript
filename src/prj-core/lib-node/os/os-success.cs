fn os_success result err
 var r true

 if is_obj result
  //status

  if has result "status"
   let status result.status

   if is_int status
    if different status 0
     assign r false
   end
  end

  //err

  if has result "err"
   let err result.err

   if is_str err
    if is_full err
     assign r false
   end
  end
 elseif is_uint result
  //status

  if is_int result
   if different result 0
    assign r false
  end
 elseif is_null result
 else
  stop

 //err

 if is_str err
  if is_full err
   assign r false
 end

 ret r
end