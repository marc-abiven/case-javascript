gn worker_init
 //on message

 fn on_message callable:str args:etc
  //verbose

  if same callable "verbose"
   let mode front args

   check is_bool mode

   if mode
    verbose_on
   else
    verbose_off

   ret true
  end

  //end

  if same callable "end"
   ret false

  //function call

  let callable get fns callable //global

  check is_fn callable //not a generator

  callable args:etc

  ret true
 end

 //main

 let port wt.parentPort

 while true
  let o wt.receiveMessageOnPort port

  if is_obj o
   let message o.message
   let callable message.callable
   let args message.args

   if not on_message callable args:etc
    brk
  end

  yield
 end

 port.close

 run wait 0.1 //flush of stdout
end
