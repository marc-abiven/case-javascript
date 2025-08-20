fn talk x:etc
 if is_single x
  let s front x

  if is_str s
   let a split s

   if is_many a
    forof a
     talk v
    end

    ret
   end
  end
 end

 if verbose
  log "debug>" x:etc
  ret
 end

 push talks x

 if gt talks.length 512
  shift talks
end