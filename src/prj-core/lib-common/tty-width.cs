fn tty_width
 if is_node
  //ssh

  if is_ssh
   //access the tty in perl because ioctl isn't supported by nodejs

   let code ""
   let code concat code "open(TTY,'<','/dev/tty');"
   let code concat code "ioctl(TTY,0x5413,my $b=\"\\0\"x8);"
   let code concat code "print((unpack('S*',$b))[1]);"

   let s os_execute "perl" "-e" code

   ret to_uint s
  end

  //batch

  if is_batch
   ret 140

  //any

  let r process.stdout.columns

  check is_uint r

  ret r
 end

 //browser

 if is_browser
  if is_chrome
   ret 70 //smaller because the debug panel is docked to the side on chrome

  ret 120
 end

 //any

 stop
end
