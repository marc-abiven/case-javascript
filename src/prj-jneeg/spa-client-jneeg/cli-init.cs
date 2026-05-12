fn cli_init
 //on double click

 let cli obj

 assign cli.frame 0
 assign cli.byte 0
 assign cli.draw 0
 assign cli.speed 0
 assign cli.offset 0
 assign cli.chans arr
 assign cli.scroll arr

 let canvas dom_canvas

 assign document.title "Coglab EEG project"

 dom_back_color html "black"

 dom_id canvas "canvas"
 assign canvas.style.position "absolute"
 assign canvas.style.transform "translate(-50%,-50%)"
 assign canvas.style.top "50%"
 assign canvas.style.left "50%"

 dom_push body canvas

 fn on_double_click
  if is_null document.fullscreenElement
   canvas.requestFullscreen
  else
   document.exitFullscreen
 end

 //restart stat

 fn restart_stat
  time_timeout on_stat 2
 end

 //restart scroll

 fn restart_scroll
  time_timeout on_scroll
 end

 //on scroll

 fn on_scroll
  let fps cli_fps cli

  if different fps 0
   let n div cli.scroll.length fps
   let step trunc n

   if gte step 0
    let a head cli.scroll step

    append cli.chans a
    shift cli.scroll a.length

    let limit data_limit cli

    if gt cli.chans.length limit
     let overflow sub cli.chans.length limit

     shift cli.chans overflow
    end

    cli_draw cli
   end
  end

  assign cli.frame inc cli.frame

  restart_scroll
 end

 //on stat

 fn on_stat
  let sharp concat "#" cli.frame
  let bandwidth endpoint_bandwidth cli
  let bandwidth byte_size bandwidth
  let bandwidth concat bandwidth "/s"
  let speed concat cli.speed "row/s"
  let fps cli_fps cli
  let fps concat fps "fps"

  log "stat" sharp bandwidth speed fps

  restart_stat
 end

 //main

 assign canvas.ondblclick on on_double_click

 cli_resize cli

 restart_scroll
 restart_stat

 ret cli
end