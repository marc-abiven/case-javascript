fn stm_dead stm:obj
 if is_full stm.queue
  ret false

 ret same stm.status "dead"
end