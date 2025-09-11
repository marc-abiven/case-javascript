fn mnt_unmount x
 //~ check is_str x

 ret os_execute "fusermount" "-u" x
end
