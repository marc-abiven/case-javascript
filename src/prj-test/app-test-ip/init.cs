fn init x:etc
 for ip_list
  log "local" v
 end

 fornum 10
  let parts arr

  fornum 4
   let n random 256
   let s to_str n

   push parts s
  end

  let ip join parts "."
  let host ip_host ip

  log ip host
 end
end
