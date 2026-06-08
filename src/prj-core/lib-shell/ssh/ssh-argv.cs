fn ssh_argv
 let r arr
 let timeout concat "ConnectTimeout=" ssh_timeout

 push r "-4" //ipv4 only
 push r "-o"
 push r "AddressFamily=inet" //divide the timeout by two by skipping ipv6
 push r "-o"
 push r timeout
 push r "-o"
 push r "ConnectionAttempts=1"
 push r "-o"
 push r "Compression=yes"
 
 ret r
end
