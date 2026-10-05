fn stm_closing stm:obj
 let list arr "error" "report" "interrupt" "deinit" "die" "dead"

 ret contain list stm.status
end