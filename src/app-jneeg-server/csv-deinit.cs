fn csv_deinit x:obj
 //~ check is_obj x

 os_system "cmd-kill" "csv-save.py"

 fs_remove x.tmp
end
