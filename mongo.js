// 1. mongoimport --db restaurents --collection restaurents json_filename_with_path

// 2.  db.restaurants.find({},{restaurant_id:1,borough:1,cuisine:1,name:1})

// 3.  db.restaurants.find({},{restaurant_id:1,borough:1,cuisine:1,name:1,_id:0})

// 4.  db.restaurants.find({},{restaurant_id:1,borough:1,cuisine:1,name:1,_id:0,"address.zipcode":1})

// 5.  db.restaurants.find({borough:"Bronx"})

// 6.  db.restaurants.find({borough:"Bronx"}).skip(5).limit(5)

// 7.  db.restaurants.find({{borough:"Bronx"},'grades.score':{$gt:80,$lt:100}}) 

// 8.  db.restaurants.find({borough:{$nin:["Brooklyn"]},cuisine:{$nin:["American"]},'grades.grade':{$in:["A"]}}).sort({cuisine:-1})

// 9.  db.restaurants.find({name: /^Wil/}) 

/* 10.  db.restaurants.find({"grades":{$elemMatch:{grade:"A",socre:11,date:"2014-08-11T00:00:00Z"}}},{})
        
        below query is working without grades.date fields
        db.restaurants.find({"grades.grade":"A","grades.score":11,"grades.date":"2014-08-11T00:00:00Z"},{restaurant_id:1,name:1,grades:1})*/

 /*11.  db.restaurants.find().sort({name:-1}) */ 
 
 /*12.  db.restaurants.find({'address.coord.1':{$gt:42,$lte:52}},{restaurant_id:1,name:1,address:1,'address.coord':1}) */

 /*13.  db.restaurants.aggregate({$group : { _id : '$borough', count : {$sum : 1}}}) */

 /*14.  db.restaurants.aggregate({$group : { _id : '$cuisine', count : {$sum : 1}}}) */

 /*15.  db.restaurants.find({name: /mon/},{name:1,borough:1,cuisine:1,'address.coord':1}) */

 /*16.  db.restaurants.find({'address.street':{$exists:true,$ne:null}})*/

 /*17.  db.restaurants.find({$or:[{cuisine:{$nin:["American","Chinees"]}},{ name:/^Wil/}]})*/

 /*18.  db.restaurants.update({restaurant_id:"41704620"},{address :'Hello',name :"Hello Vivek",restaurant_id:"41704620"},{upsert:true}) */

 //"40356442"
 /*
_id : 5e1c2175aa6a3b9dddfeadb2
address :'Hello'
name :"Hello Vivek"
restaurant_id:"40356483"*/
/*19. db.restaurants.find({cuisine:"American",'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}})*/

/*20.  db.restaurants.find().sort({cuisine:1},{borough:-1})*/