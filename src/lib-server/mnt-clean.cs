fn mnt_clean x
 check is_str x

 if is_readable x
  mnt_unmount x
  fs_remove x
 else
  mnt_unmount x
end