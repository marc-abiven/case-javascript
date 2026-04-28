gn upload x:etc
 let args dup x

 if extract args "--reset"
  sudo_dir_reset www

 let local extract args "--no-upload"
 let local not local

 var all true

 if extract args "--aft"
  run aft local args:etc
  assign all false
 end

 if extract args "--coglab"
  run coglab local args:etc
  assign all false
 end

 if extract args "--marc-abiven"
  run marc_abiven local args:etc
  assign all false
 end

 if extract args "--merlin"
  run merlin args:etc
  assign all false
 end

 if extract args "--server-jneeg"
  run server_jneeg args:etc
  assign all false
 end

 if extract args "--server-merlin"
  run server_merlin args:etc
  assign all false
 end

 if all
  run aft local args:etc
  run marc_abiven local args:etc
  run server_jneeg args:etc
  run server_merlin args:etc
 end

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end
end
