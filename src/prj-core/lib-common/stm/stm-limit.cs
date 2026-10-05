fn stm_limit stm:obj
 //frame

 let frame stm.limit_frame

 if gt frame 0
  if gte stm.frame frame
   let o obj frame
   let s obj_option o

   stm_log stm "limit" s

   ret true
  end
 end

 //error

 let error stm.limit_error

 if gt error 0
  if gte stm.error error
   let o obj error
   let s obj_option o

   stm_log stm "limit" s

   ret true
  end
 end

 //any

 ret false
end