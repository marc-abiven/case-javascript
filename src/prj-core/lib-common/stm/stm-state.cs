fn stm_state stm:obj state:obj
 forin state
  if has stm.state k
   let key k
   let o obj key
   let s obj_option o

   stm_log3 stm "set" s
  end

  set stm.state k v
  set global k v
 end
end
