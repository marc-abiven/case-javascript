gn stm_loop stm:obj
 stm_post stm "init"

 while run stm_pump stm
  yield
 end
end
