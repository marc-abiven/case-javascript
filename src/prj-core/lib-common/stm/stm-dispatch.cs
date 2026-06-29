fn stm_dispatch stm:obj event:obj
 //match on

 fn match_on status:str event:str
  //status event

  let on find_on status event

  if is_fn on
   ret value on

  //status any

  let on find_on status "any"

  if is_fn on
   ret value on

  //any event

  let on find_on "any" event

  if is_fn on
   ret value on

  //any any

  let on find_on "any" "any"

  if is_fn on
   ret value on

  //any

  stop
 end

 //find on

 fn find_on status:str event:str
  for stm.ons
   if same v.status status
    if same v.event event
     ret value v.on
   end
  end

  ret null
 end

 //main

 let type event.type
 let args event.args
 let on match_on stm.status type
 let name stm_parse_on on
 var status null

 //prompt

 let origin concat stm.status ":" type
 var target concat name.status ":" name.event
 let a arr origin

 if same origin target
  assign target ""
 else
  push a target

 stm_log3 stm a:etc

 //on

 let begin time_now
 var error null

 try
  assign status on stm type args:etc
 catch e
  assign error e
 end

 if is_undef status
  assign status null

 if is_null status
  assign status stm.status

 let end time_now
 let duration sub end begin

 //history

 let history stm.history
 let frame stm.frame
 let time begin
 let count 1
 let entry obj frame time duration count origin target status args

 if same origin target
  assign entry.target ""

 //history

 var push true

 if is_full stm.history
  //merge

  let current obj origin target status args
  let previous front stm.history
  let origin previous.origin
  let target previous.target
  let status previous.status
  let args previous.args
  let previous obj origin target status args

  if eq current previous
   let previous front stm.history

   assign previous.count inc previous.count
   assign previous.duration add previous.duration duration

   assign push false
  end
 end

 //add

 if push
  unshift history entry

  if gt history.length 64
   drop history
 end

 //frame

 assign stm.frame inc frame

 //error

 if is_obj error
  if same type "error"
   stm_send stm "error-fallback" args:etc error
  elseif same type "error-fallback"
   stm_send stm "error-critical" args:etc error
  else
   stm_send stm "error" args:etc error
 end

 //status

 stm_log3 stm status

 assign stm.status status
end