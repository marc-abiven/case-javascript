fn wp_authors posts:arr
 //~ check is_arr posts

 fn compare_count x:obj y:obj
  //~ check is_obj x
  //~ check is_obj y

  ret cmp x.count y.count
 end

 let r arr
 let authors arr

 forof posts
  if contain authors v.author
   cont

  push authors v.author
 end

 for authors
 //~ forin authors
  //~ let i to_i k
  //~ let v at authors i
  let id inc i
  let name v

  var count 0

  forof posts
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
