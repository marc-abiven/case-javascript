function csv_init()
{
 const r=obj() 
 
 r.tmp="tmp"
 
 csv_deinit(r)
 dir_make(r.tmp)
  
 const dir=dir_current()

 dir_change(r.tmp)
 os_spawn("sudo","python3","../res/csv-save.py")
 dir_change(dir)
 
 return r
}
