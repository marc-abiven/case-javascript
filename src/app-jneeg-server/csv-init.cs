fn csv_init
 let csv obj
 
 assign csv.tmp "tmp"
 
 csv_deinit csv
 dir_make csv.tmp
  
 let dir dir_current

 dir_change csv.tmp
 os_detach "sudo" "python3" "../src/app-jneeg-server/res/csv-save.py"
 dir_change dir
 
 ret csv
end
