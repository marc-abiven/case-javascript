fn stm_dump stm:obj
 let queue stm.queue

 if is_full queue
  let t tbl_render queue

  flower "queue"
  log t
 end

 let history stm_history stm

 if is_full history
  let t tbl_render history

  flower "history"
  log t
 end

 let ons stm.ons

 if is_full ons
  let t tbl_render ons

  flower "on"
  log t
 end
end