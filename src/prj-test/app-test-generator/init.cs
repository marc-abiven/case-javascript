gn init x:etc
 gn g1 x:str
  log "g1" x
 end

 gn g2
  log "g2"
 end

 //log "ok"
 //stop

 let iterator g1 "test"

 dump iterator

 let state iterator.next

 dump state

 let iterator call g2

 dump iterator

 let state iterator.next

 dump state

 let v gn_run g1 "parameter"

 dump v
end
