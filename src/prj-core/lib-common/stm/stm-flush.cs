fn stm_flush stm:obj
 let repeat stm.repeat

 if is_null repeat
  ret

 if same repeat.count 1
  ret

 let count repeat.count
 let o obj count
 let s obj_option o
 let s space repeat.string s

 stm_print stm s

 assign stm.repeat null
end