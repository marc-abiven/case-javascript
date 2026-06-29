fn stm_on_any_error_fallback stm:obj event:str error:obj fallback:obj args:etc
 //dump error

 fn dump_error name:str error:obj
  let properties obj_properties error

  sort properties

  for properties
   let k v
   let v get error k

   if is_txt v
    let key k

    for split v
     let s js_encode v

     stm_log stm name key s
    end

    cont
   end

   let v json_encode v

   stm_log stm name k v
  end
 end

 //main

 dump_error "error" error
 dump_error "fallback" fallback

 //rest

 if is_full args
  flower "Arguments"

  let s to_dump args

  log s
 end

 //enable the verbose mode
 
 assign verbose 1
 
 ret "error"
end
