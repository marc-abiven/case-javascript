fn trace x:etc
 if is_single x
  let first front x

  if is_str first
   let a split first

   if is_many a
    for a
     trace v
    end

    ret
   end
  end
 end

 if gt verbose 0
  log "trace>" x:etc
 elseif same verbose 0
  let a arr

  for x
   if not is_str v
    let s json_encode v

    push a s
   else
    push a v
  end

  let s join a " "

  push traces s

  if gt traces.length 64
   shift traces
 end
end
