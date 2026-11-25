fn count_lib
 let libs arr

 forin pkg_init
  for v
   if not contain libs v
    push libs v
  end
 end

 ret libs.length
end
