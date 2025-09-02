fn sigint x
 check is_fn x

 let callback value x

 fn on_sigint x
  check is_str x

  let pid concat "pid=" process.pid
  let signal concat "signal=" x

  log app pid signal

  callback x
 end

 let on_sigint on on_sigint

 process.once "SIGINT" on_sigint
end