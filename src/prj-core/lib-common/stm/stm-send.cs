gn stm_send stm:obj event:str args:etc
 let type event
 let event obj type args

 run stm_dispatch stm event
end
