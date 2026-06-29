fn stm_dump stm:obj
 let history stm_history stm
 let t1 tbl_render history
 let t2 tbl_render stm.ons

 log t1
 log t2
end
