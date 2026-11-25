fn app_on_dead_error stm:obj event:str error:obj args:etc
 flower "dead-error"

 let report report_init error

 report_log report

 flower "end-dead-error"
end
