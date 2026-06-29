fn tty_width
 if is_node
  if is_ssh
   //access the tty in perl because ioctl isn't supported by nodejs

   let code ""
   let code concat code "open(TTY,'<','/dev/tty');"
   let code concat code "ioctl(TTY,0x5413,my $b=\"\\0\"x8);"
   let code concat code "print((unpack('S*',$b))[1]);"

   let s os_execute "perl" "-e" code

   ret to_uint s
  elseif is_batch
   ret 140
  else
   let r process.stdout.columns

   check is_uint r

   ret r
 elseif is_browser
  ret 80
 else
  stop
end