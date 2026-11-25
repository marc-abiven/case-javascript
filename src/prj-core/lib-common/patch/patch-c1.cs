//escape bytes between 128 to 159
//except when chr(127) is before (ansi sequence)

//https://bugs.launchpad.net/ubuntu/+source/vte3/+bug/1297051

fn patch_c1 x:str
 //is c1

 fn is_c1 x:str
  let n asc x

  ret between n 128 159
 end

 //main

 let a arr
 var previous null

 for x
  if is_null previous
   //first

   push a v
  elseif same previous escape
   //escape

   push a v
  elseif is_c1 v
   //c1

   let s char_escape v

   push a s
  else
   //any

   push a v
  end

  assign previous v
 end

 ret implode a
end