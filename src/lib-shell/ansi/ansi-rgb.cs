fn ansi_rgb x:obj
 //code=16+36*r+6*g+b

 let r mul x.r 36
 let g mul x.g 6
 let b x.b

 ret add 16 r g b
end
