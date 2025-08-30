fn ip_host x
 check is_str x

 let r os_execute "host" x
 let r split r
 let r back r
 
 if contain r "not found"
  ret null
 
 let r split r " "
 let r back r
 let r strip_r r "."
 
 ret r
end
