fn cli_draw x:obj
 let context canvas.getContext "2d"

 assign context.fillStyle "black"

 context.fillRect 0 0 canvas.width canvas.height

 assign context.lineWidth 1

 let width canvas.width
 let height div canvas.height dimension
 let limit data_limit x

 fornum dimension
  let color at colors i
  let chan chan_at x.chans i
  let plot chan_plot chan width height limit
  let y mul height i

  context.beginPath

  assign context.strokeStyle color

  for plot
   let x v.x
   let y add y v.y

   if same i 0
    context.moveTo x y
   else
    context.lineTo x y
  end

  context.stroke
 end
end
