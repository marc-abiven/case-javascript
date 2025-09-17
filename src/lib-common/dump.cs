fn dump x
 if is_undef x
  check same arguments.length 1

 let name fn_args "dump"

 check is_single name

 let name front name

 if is_str x
  let s to_lit x

  log name s
 else
  log name x
end
