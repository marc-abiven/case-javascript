fn stm_on_any_error_critical stm:obj event:str args:etc
 stm_log stm "critical-error" args

 ret "dead"
end