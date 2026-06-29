fn mnt_unmount x
 ret os_execute "fusermount" "-u" x
end
