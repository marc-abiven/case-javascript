function* wp_pages()
{
 const pages=yield* wp_load("https://transhumanistes.com/wp-json/wp/v2/pages")
 const a=arr()
 
 for(const v of pages)
 {
  const id=v.id
  const parent=v.parent
  
  let date=new Date(v.date)
  
  date=date.getTime()
  date=div(date,1000)
  date=trunc(date)
  
  const url=v.link
  const title=v.title.rendered
  const content=v.content.rendered
  const excerpt=v.excerpt.rendered
  const o={id,parent,date,url,title,content,excerpt}
  
  push(a,o)  
 }
 
 return wp_fold(a)
}
