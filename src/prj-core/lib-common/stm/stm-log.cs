fn stm_log stm:obj args:etc
 //repeat

 var string stringify args:etc
 let lines split string

 if is_obj stm.repeat
  if is_many lines
   //many

   stm_flush stm

   //reset

   assign stm.repeat obj
   assign stm.repeat.count 1
   assign stm.repeat.string back lines
  elseif same string stm.repeat.string
   //repeat

   assign stm.repeat.count inc stm.repeat.count

   ret
  else
   //end of repeat

   stm_flush stm

   assign stm.repeat obj
   assign stm.repeat.count 1
   assign stm.repeat.string string
  end
 else
  //first

  assign stm.repeat obj
  assign stm.repeat.count 1
  assign stm.repeat.string back lines
 end

 //print

 stm_print stm string
end
