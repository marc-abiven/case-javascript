fn git_execute dir:str x:etc
 let child dir_call dir os_run "git" x:etc

 check os_success child.status //allow stderr to be full
end
