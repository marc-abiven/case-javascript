fn compute_cost
 let s os_execute "sloccount" "src"

 forof split s
  if not contain v "$"
   cont

  let s split v "$"
  let s back s
  let s trim s
  let s replace s "," ""

  ret to_uint s
 end

 stop
end
