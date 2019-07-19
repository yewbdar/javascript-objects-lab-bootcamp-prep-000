let recipes={}
function updateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
  
}
function updateObjectWithKeyAndValue(object,key,value){
 let newObj=Object.assign({},object[key]=value) 
 return newObj
}