fn stm_timeout_kill stm:obj
 check stm_timeout_has stm

 clearTimeout stm.timeout

 assign stm.timeout null
end