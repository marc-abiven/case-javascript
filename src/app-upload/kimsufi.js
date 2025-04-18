function kimsufi()
{
 const token=get_token("kimsufi")
 const login="mabynogy@mabynogy.org"
 const target="."
 const login_target=concat(login,":",target)

 flower("kimsufi")
 fs_remove("tmp")
 dir_make("tmp")

 sshpass(token,"ssh",login,"rm","--recursive","--force","case-javascript")
 sshpass(token,"rsync","--verbose","--recursive","--perms","../case-javascript",login_target)
 
 const s=sshpass(token,"ssh",login,"ps","aux","|","grep","node")
 const a=split(s)
 
 for(const v of a)
 {
  const s=replace_rec(v,"  "," ")
  
  if(contain(s,"server.js"))
  {
   const a=split(s," ")
   
   let pid=at(a,1)
   
   pid=to_uint(pid)
   
   log("kill",pid)
   
   sshpass(token,"ssh",login,"kill",pid)
  }
 }
 
 sshpass(token,"ssh",login,"case-javascript/launch-server-81-random")
}
