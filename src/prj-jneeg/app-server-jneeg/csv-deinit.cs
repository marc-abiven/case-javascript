fn csv_deinit csv:obj
 os_kill "csv-save.py"

 fs_remove csv.tmp
end
