fn stm_on_deinit_error stm:obj event:str error:obj args:etc
 console.log "deinit-error" error args:etc

 ret "dead"
end