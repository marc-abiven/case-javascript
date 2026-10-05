fn stm_vars stm:obj vars:obj
 forin vars
  if has stm.vars k
   let key k
   let value v
   let o obj key value
   let s obj_option o

   stm_log3 stm "rewrite" s
  end

  set stm.vars k v
  set global k v
 end
end
