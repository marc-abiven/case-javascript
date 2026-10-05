fn app_on_deinit_timeout stm:obj event:str args:etc
 verbose_on

 stm_log3 stm "worker" "killed"

 worker.terminate

 stm_timeout stm

 ret "die"
end
