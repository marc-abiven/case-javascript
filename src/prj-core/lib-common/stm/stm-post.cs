fn stm_post stm:obj event:str args:etc
 let type event
 let o obj type args

 push stm.queue o
end