gn stm_dispatch stm:obj event:obj
 //match on

 fn match_on status:str event:str
  //status event

  let on find_on status event

  if is_xn on
   ret value on

  //status any

  let on find_on status "any"

  if is_xn on
   ret value on

  //any event

  let on find_on "any" event

  if is_xn on
   ret value on

  //any any

  let on find_on "any" "any"

  if is_xn on
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

 //compare time

 fn compare_time x:obj y:obj
  ret cmp x.time y.time
 end

 //main

 let type event.type
 let args event.args
 let on match_on stm.status type

 let name stm_parse_on stm on
 var status null

 //prompt

 let origin concat stm.status ":" type
 let target concat name.status ":" name.event
 let arguments arr

 for args
  let v display_dump v

  push arguments v
 end

 let arguments join arguments " "
 let arguments txt_trim arguments
 let handler strip_l on.name stm.prefix
 let a arr handler

 if different origin target
  push a origin

 if is_full arguments
  push a arguments

 stm_log3 stm a:etc

 //on

 let begin time_now

 try
  if is_fn on
   assign status on stm type args:etc
  elseif is_gn on
   assign status run on stm type args:etc
  else
   stop
 catch e
  assign stm.error inc stm.error

  //~ let report report_init e

  //~ report_log report

  //run stm_send stm "error" e
  stm_post stm "error" e
 end

 if is_undef status
  assign status null

 if is_null status
  assign status stm.status

 let end time_now
 let duration sub end begin

 //history

 var target target

 if same origin target
  assign target ""

 let history stm.history
 let frame stm.frame
 let time begin
 let count 1
 let entry obj frame time duration count origin target status args

 //reorder the history because sent messages appear before

 unshift history entry
 sort history compare_time
 reverse history

 //merge same messages

 let a dup history

 clear history

 while is_full a
  let entry shift a

  if is_empty history
   push history entry

   cont
  end

  let last back history

  if same entry.origin last.origin
   if same entry.target last.target
    if same entry.status last.status
     if eq entry.args last.args
      assign last.count add last.count entry.count
      assign last.duration add last.duration entry.duration

      cont
     end
    end
   end
  end

  push history entry
 end

 //limit

 if gt history.length 64
  drop history

 //frame

 assign stm.frame inc frame

 //status

 if same stm.status status
  ret status

 //init

 assign stm.status status

 //run stm_send stm "init"
 stm_post stm "init"

 ret status
end
