fn ip_host x:ip
 let timeout 2
 let child silent os_run "host" "-W" timeout x

 if os_failure child
  ret null

 let a split child.out

 let first front a
 let first to_lower first
 let last back a
 let last to_lower last

 if contain first "timed out"
  ret null

 if contain last "not found"
  ret null

 if contain last "has no ptr record"
  ret null

 let r split last " "
 let r back r
 let r strip_r r "."

 if not is_domain r
  ret null

 ret r
end
