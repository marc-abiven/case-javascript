fn dom_posts_simple posts:arr
 let r dom_posts posts
 let trs dom_children r

 shift trs

 for trs
  let td_title dom_column v "Titre"
  let a dom_by_tag td_title "a"
  let a front a
  let length is_firefox
  let length iif length 100 98

  let data_title dom_data_get td_title
  let title cut_r data_title length
  let cutted different title data_title

  if cutted
   dom_title a data_title

  dom_text a title
 end

 ret r
end
