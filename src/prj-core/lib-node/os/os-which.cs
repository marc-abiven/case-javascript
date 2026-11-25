fn os_which command:str
 let child os_run "which" command

 if os_success child
  ret child.out

 ret null
end
