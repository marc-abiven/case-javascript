fn report_render report:obj human
 if is_undef human
  ret report_render report true

 let a arr

 forin report
  if is_full a
   push a ""

  if is_full v
   push a v
  end
 end

 if human
  push a ""
  push a "Refresh the page or go to another URL to continue."
 end

 ret join a
end
