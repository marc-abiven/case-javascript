fn os_execute x:etc
 let o os_run x:etc
 let status o.status
 let out o.out
 let err o.err

 var display false

 if is_full err
  if same status 0
   let a slice_l x 2

   trace a:etc
  end

  let s txt_prepend err " err> "

  trace s
 end

 let a arr

 if is_full out
  push a out

 if is_full err
  push a err

 let s join a

 ret trim_r s
end