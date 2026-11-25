fn app_on_deinit_error stm:obj event:str error:obj args:etc
 flower "deinit-error"

 let report report_init error

 report_log report

 flower "end-deinit-error"

 ret "dead"
end
