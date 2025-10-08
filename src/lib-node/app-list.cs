fn app_list
 let r arr

 for dir_read "src" true
  let base path_base v
  let a split base "-"
  let prefix shift a

  if different prefix "app"
   cont

  let name join a "-"

  push r name
 end

 ret r
end
