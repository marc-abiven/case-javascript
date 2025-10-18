fn cli_resize x:obj
 let width mul 0.98 innerWidth
 let width trunc width
 let height mul 0.94 innerHeight
 let height trunc height

 assign canvas.width width
 assign canvas.height height

 cli_draw x
end
