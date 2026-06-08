fn task_run x:gn y:etc
 let name x.name
 let iterator x y:etc
 let task obj name iterator

 push tasks task
end
