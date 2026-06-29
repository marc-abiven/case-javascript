fn stm_on_init_start stm:obj event:str args:etc
 //init

 forin fn_select "init_"
  v stm
 end

 //source

 let source dbg_source
 let state obj source

 stm_state stm state

 //log3 is ready now

 assign stm.log value log3

 stm_post stm "cont"

 ret "load"
end