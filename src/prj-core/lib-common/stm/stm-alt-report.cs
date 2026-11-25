fn stm_alt_report stm:obj error:obj
 for obj_properties error
  let k v
  let v get error k

  if same k "stack"
   for split v
    let v trim v
    let v strip_l v "at "
    let v js_encode v

    stm_log stm "stack" v
   end

   cont
  end

  let v to_lit v

  stm_log stm k v
 end
end
