gn csv_init
 let csv obj
 let tmp path_tmp "csv"

 assign csv.tmp tmp

 csv_deinit csv
 dir_make csv.tmp

 let dir dir_current
 let path "src/app-server-jneeg/res/csv-save.py"
 let path path_real path

 dir_change csv.tmp
 run os_detach "sudo" "python3" path
 dir_change dir

 ret csv
end
