fn csv_random x:obj
 //get signal

 fn get_signal x:uint
  let r arr
  let base random 8192
  let range random 4096

  fornum x
   let half div range 2
   let v random range
   let v add v base
   let v sub v half
   let v trunc v

   push r v
  end

  ret r
 end

 //main

 let r arr
 let length random 58
 let signals arr

 fornum dimension
  let signal get_signal length

  push signals signal
 end

 fornum length
  let row arr
  let index i

  fornum dimension
   let signal at signals i
   let n at signal index

   push row n
  end

  push r row
 end

 ret r
end