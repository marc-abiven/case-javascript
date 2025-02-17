function srv_home(x)
{
 check(is_obj,x)
 
 const lines=arr()
 const js=app_make("client")
 
 push(lines,"<!doctype html>")
 push(lines,"<script>")
 push(lines,js)
 push(lines,"</script>")
 
 return join(lines)
}
