function* wp_categories()
{
 const a=arr()
 const categories=yield* wp_load("https://transhumanistes.com/wp-json/wp/v2/categories")
 
 for(const v of categories)
 {
  const id=v.id
  const parent=v.parent
  const url=v.link
  const title=v.name
  const content=v.description
  const o={id,parent,url,title,content}
  
  push(a,o)  
 }
 
 return wp_fold(a)
}
