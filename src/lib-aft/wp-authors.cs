fn wp_authors posts:arr
 fn compare_count x:obj y:obj
  ret cmp x.count y.count
 end

 let r arr
 let authors arr

 for posts
  if contain authors v.author
   cont

  push authors v.author
 end

 for authors
  let id inc i
  let name v

  var count 0

  for posts
   if same v.author name
    assign count inc count
  end

  let o obj id name count

  push r o
 end

 sort r compare_count
 reverse r

 ret r
end
