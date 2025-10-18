gn init x:etc
 assign global.colors arr "lawngreen" "dodgerblue" "orange" "red" "yellow" "cyan" "white" "magenta"

 let cli cli_init

 fn on_resize
  cli_resize cli
 end

 assign window.onresize on on_resize

 while true
  var data null

  try
   assign data run xhr_get "/data"
  catch
   run sleep 2
   cont
  end

  let length to_json data
  let length length.length

  assign cli.byte add cli.byte length
  assign cli.speed data.speed

  if lt data.offset cli.offset
   assign cli.chans arr
   assign cli.scroll data.chans
  else
   let length sub data.offset cli.offset
   let chans tail data.chans length

   append cli.scroll chans
  end

  assign cli.offset data.offset

  run sleep 0.1
 end
end