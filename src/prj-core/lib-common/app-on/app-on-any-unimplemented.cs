fn app_on_any_unimplemented stm:obj event:str args:etc
 verbose_on

 stm_log3 stm event args:etc

 ret "error"
end
