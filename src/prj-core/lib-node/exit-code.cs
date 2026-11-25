fn exit_code status:int
 if is_int process.exitCode
  ret

 assign process.exitCode status
end
