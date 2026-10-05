fn report error
 if is_undef error
  let e new Error "report"

  ret report e
 end

 check is_obj error

 let r report_init error

 report_log r

 ret r
end