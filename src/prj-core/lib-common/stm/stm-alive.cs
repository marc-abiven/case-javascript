fn stm_alive stm:obj
 if stm_limit stm
  ret false

 ret not stm_dead stm
end