fn stm_print stm:obj x:str
 //show columns

 if not stm.column
  //main thread

  if is_main_thread
   let prompt stm.prompt
   let columns arr

   forin prompt
    var align "left"

    let c front v

    if is_space c
     assign align "right"

    let length v.length
    var column k

    if same align "left"
     assign column pad_r column " " length
    elseif same align "right"
     assign column pad_l column " " length
    else
     stop

    push columns column
   end

   push columns "log"

   let header join columns " "

   flower "" "-"
   log header
   flower "" "-"

   assign stm.column true
  end
 end

 //prompt

 let prompt stm.prompt
 let prompt obj_vals prompt
 let prompt join prompt " "

 let lines split x

 if is_empty lines
  log prompt
 else
  for lines
   log prompt v
  end
 end
end