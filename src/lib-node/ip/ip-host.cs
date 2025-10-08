fn ip_host x:str
 let timeout 2
 let a silent os_execute "host" "-W" timeout x
 let a split a
 let first front a
 let last back a

 if contain first "timed out"
  ret null

 if contain last "not found"
  ret null

 let r split last " "
 let r back r
 let r strip_r r "."

 ret r
end
