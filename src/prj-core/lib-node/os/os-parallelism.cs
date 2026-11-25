fn os_parallelism
 let r os.availableParallelism
 let r dec r //leave one cpu for the system

 ret r
end