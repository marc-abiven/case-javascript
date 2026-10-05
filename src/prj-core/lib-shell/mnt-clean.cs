fn mnt_clean x:str
 mnt_unmount x

 if is_readable x
  fs_remove x
end