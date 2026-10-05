fn uncomment x:str
 let source path_tmp "source.c"
 let target path_tmp "target.c"

 file_save source x

 os_system "gcc" "-E" "-P" "-fpreprocessed" "--language=c" source "-o" target

 let r file_load target

 fs_remove source
 fs_remove target

 ret r
end