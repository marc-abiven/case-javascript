fn os_log call:xn status out:str err:str args:etc
 //log only failed commands

 var report false

 if is_null status
  assign report true
 elseif is_int status
  if different status 0
   assign report true
 else
  stop

 if is_full err
  assign report true

 //report

 if report
  os_report call status out err args:etc
end