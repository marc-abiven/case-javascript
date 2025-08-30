fn byte_size x
 check is_uint x
 check gte x 0

 let kb 1024
 let mb mul kb 1024
 let gb mul mb 1024
 let tb mul gb 1024

 if lt x kb
  let s to_fixed x

  ret concat s "b"
 end

 if lt x mb
  let s div x kb
  let s trunc s
  let s to_fixed s

  ret concat s "Kb"
 end

 if lt x gb
  let s div x mb
  let s trunc s
  let s to_fixed s

  ret concat s "Mb"
 end

 if lt x tb
  let s div x gb
  let s trunc s
  let s to_fixed s

  ret concat s "Gb"
 end

 let s div x tb
 let s trunc s
 let s to_fixed s

 ret concat s "Tb"
end