fn exit_code status:uint
 if different process.exitCode 0
  ret

 assign process.exitCode status
end
