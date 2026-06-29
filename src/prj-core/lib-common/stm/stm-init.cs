//a state machine

fn stm_init
 //console log

 fn console_log x:etc
  if is_node
   //node

   stdout_log x:etc
  elseif is_browser
   //browser

   console.log x:etc
  else
   stop
 end

 //log

 let log value console_log

 //on

 let ons arr

 forin fn_select "stm_on_"
  let on stm_parse_on v

  push ons on
 end

 let status "init"
 let frame 0
 let limit 0
 let queue arr
 let history arr
 let tasks arr
 let state obj

 ret obj status frame limit log console_log ons queue history tasks state
end
