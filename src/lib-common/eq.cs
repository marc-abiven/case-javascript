fn eq x y
 check is_def x
 check is_def y

 if same x y
  ret true

 if is_arr x
  if is_arr y
   fornum min x.length y.length
    let xval at x i
    let yval at y i
    
    if neq xval yval
     ret false
   end
   
   ret eq x.length y.length
  end
 end

 if is_obj x
  if is_obj y
   let xkeys obj_keys x
   let ykeys obj_keys y

   let xvals obj_vals x
   let yvals obj_vals y

   fornum min xkeys.length ykeys.length
    let xkey at xkeys i
    let ykey at ykeys i
    
    if neq xkey ykey
     ret false

    let xval at xvals i
    let yval at yvals i
     
    if neq xval yval
     ret false
   end
   
   ret eq xkeys.length ykeys.length
  end
 end
 
 let n cmp x y
 
 ret same n 0
end
