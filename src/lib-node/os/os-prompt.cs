gn os_prompt x y:etc
 check is_str x

 let name x
 var closed false
 var status null

 fn print x y
  check is_obj x
  check is_str y

  let prompt concat y ">"
  let s to_str x
  let s strip_r s "\n"

  forof split s
   log prompt v
  end
 end

 fn on_out x
  check is_obj x

  print x "out"
 end

 fn on_err x
  check is_obj x

  let prompt concat name " err"

  print x prompt
 end

 fn on_close x
  check is_uint x

  assign status x
  assign closed true
 end

 let process cp.spawn x y
 let on_out on on_out
 let on_err on on_err
 let on_close on on_close

 process.stdout.on "data" on_out
 process.stderr.on "data" on_err
 process.on "close" on_close

 while not closed
  yield
 end

 if different status 0
  let s to_lit x

  talk "os-prompt" s "status" status
 end

 ret status
end