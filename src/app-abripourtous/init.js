function* init(...x)
{
 function spacer()
 {
  const r=dom_create("div")
 
  r.className="spacer"
 
  return r
 }
 
 function on_pot()
 {
  location.href="https://www.leetchi.com/fr/c/un-abri-pour-tous-8264014"
 }
 
 //head
 
 document.title="Un abri pour tous"
 
 const html=document.documentElement
 const body=document.body
 const collection=html.getElementsByTagName("head")
 const head=collection.item(0)
 const link1=dom_create("link")
 
 link1.setAttribute("href","common.css")
 link1.setAttribute("rel","stylesheet")

 head.append(link1)

 let device="desktop"
 
 if(is_phone())
  device="phone"
  
 const css=concat(device,".css")
 const link2=dom_create("link")

 link2.setAttribute("href",css)
 link2.setAttribute("rel","stylesheet")

 head.append(link2)

 //title

 const div1=dom_create("div")
 const span1=dom_create("span")
 const span2=dom_create("span")
 const i1=dom_create("i")
 const spacer1=spacer()

 div1.className="pad border background-gray"

 span1.innerText="Bienvenue sur "
 i1.innerText="Un abri pour tous "
 span2.innerText="!"

 div1.append(span1)
 div1.append(i1)
 div1.append(span2)
 body.append(div1)
 body.append(spacer1)
 
 //desktop
  
 if(same(device,"desktop"))
 { 
  const img1=dom_create("img")
  
  img1.className="float small pad-right pad-bottom"
  img1.id="logo"
  img1.src="tent-bw-512x332.png"
  
  body.append(img1)
 }
 
 //fragment
 
 const div2=dom_create("div")
 const fragment=concat("fragment-",device,".html")
  
 div2.innerHTML=yield* xhr_load(fragment)
  
 body.append(div2)
 
 //button
 
 pot.onclick=on_pot
 
 log("ok")
}
