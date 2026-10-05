fn stdout_log_async x:etc
 let s stringify x:etc
 let s concat s "\n"
 let success process.stdout.write s

 check success
end

