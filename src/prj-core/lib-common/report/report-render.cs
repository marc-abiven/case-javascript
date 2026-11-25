fn report_render report:obj human
 if is_undef human
  ret report_render report true

 let a arr

 forin report
  if same k "message"
   cont

  if is_empty v
   cont

  if is_full a
   push a ""

  push a v
 end

 if human
  push a ""
  push a "Refresh the page or go to another URL to continue."
 end

 ret join a
end