fn stm_send stm:obj event:str args:etc
 let type event
 let o obj type args

 unshift stm.queue o
end