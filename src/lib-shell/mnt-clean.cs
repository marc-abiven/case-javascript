fn mnt_clean x:str
 if is_readable x
  mnt_unmount x
  fs_remove x
 else
  mnt_unmount x
end
