fn csv_deinit x:obj
 os_system "cmd-kill" "csv-save.py" "--quiet"

 fs_remove x.tmp
end
