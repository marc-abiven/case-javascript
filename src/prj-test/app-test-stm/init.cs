gn init x:etc
 //prompt

 let stm stm_init "test"
 let previous value stm.prompt

 fn prompt stm:obj
  let o previous
  let name stm.name
  let index o.index
  let time o.time
  let status o.status

  ret obj name index time status
 end

 assign stm.prompt partial prompt stm

 //main

 assign stm.limit_frame 20
 stm_verbose_on stm

 stm_post stm "test"
 stm_post stm "test"

 run stm_loop stm
end
