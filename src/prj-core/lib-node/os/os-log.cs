fn os_log call:xn status out:str err:str args:etc
 if os_failure status err
  os_report call status out err args:etc
end
