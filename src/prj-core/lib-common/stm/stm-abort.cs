fn stm_abort stm:obj
 let tasks stm.tasks

 while is_full tasks
  let task shift tasks
  let name task.name
  let o obj name
  let s obj_option o

  stm_log3 stm "abort" s

  let result task.iterator.return

  check result.done
  check is_undef result.value
 end
end