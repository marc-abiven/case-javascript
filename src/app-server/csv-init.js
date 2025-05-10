function csv_init()
{
 const csv=obj() 
 
 csv.tmp="tmp"
 
 csv_deinit(csv)
 dir_make(csv.tmp)
  
 const dir=dir_current()

 dir_change(csv.tmp)
 os_spawn("sudo","python3","../src/app-server/res/csv-save.py")
 dir_change(dir)
 
 return csv
}
