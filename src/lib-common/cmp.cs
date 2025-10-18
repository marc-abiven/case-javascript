fn cmp x:def y:def
 if same x y
  ret 0

 if is_arr x
  if is_arr y
   fornum min x.length y.length
    let xval at x i
    let yval at y i
    let n cmp xval yval

    if different n 0
     ret n
   end

   ret cmp x.length y.length
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
    let n cmp xkey ykey

    if different n 0
     ret n

    let xval at xvals i
    let yval at yvals i
    let n cmp xval yval

    if different n 0
     ret n
   end

   ret cmp xkeys.length ykeys.length
  end
 end

 if inline "x>y"
  ret 1

 if inline "x<y"
  ret -1

 ret 0
end