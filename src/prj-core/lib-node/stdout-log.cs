fn stdout_log x:etc
 let s stringify x:etc
 let s concat s "\n"

 stdout_write s
end