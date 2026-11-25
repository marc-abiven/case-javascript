fn init_common stm:obj
 let color false
 let minute 60 //for time_delay
 let hour mul 60 minute
 let day mul 24 hour
 let week mul 7 day
 let month mul 30 day
 let year mul 12 month
 let traces arr //for trace
 let vars obj color minute hour day week month year traces

 stm_vars stm vars
end
