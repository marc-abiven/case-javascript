fn json_encode x
 if is_undef x
  check same arguments.length 1

  ret "undefined"
 end

 ret JSON.stringify x
end