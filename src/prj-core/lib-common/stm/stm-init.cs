//a state machine

fn stm_init name:str
 let stm obj

 assign stm.name name
 assign stm.prefix concat name "_on_"
 assign stm.status "init"
 assign stm.frame 0
 assign stm.error 0
 assign stm.verbose false
 assign stm.column false
 assign stm.limit_frame 0
 assign stm.limit_error 3
 assign stm.frequency 30
 assign stm.repeat null
 assign stm.prompt partial stm_prompt stm
 assign stm.report partial stm_alt_report stm
 assign stm.queue arr
 assign stm.timeout null
 assign stm.ons arr
 assign stm.stack arr
 assign stm.history arr
 assign stm.tasks arr
 assign stm.vars obj

 forin fn_select stm.prefix
  let on stm_parse_on stm v

  push stm.ons on
 end

 //debug

 if is_debug
  assign stm.limit_frame 32
  assign stm.frequency 3
 end

 ret stm
end
