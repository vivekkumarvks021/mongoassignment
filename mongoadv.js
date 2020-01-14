//1.  mongoimport --db restaurents --collection restaurents json_filename_with_path

//5.  db.restaurants.find({borough:"Bronx"}).sort({name:-1}) 

/*10. db.restaurents.aggregate([{$match:{borough:"Bronx",cuisine:{$in:['Italian','Bakery']}}},{$group:{_id:"$cuisine", count:{$sum:1}}}])  */

/*11. db.restaurents.aggregate([{$match:{borough:"Brooklyn"}},{$group:{_id:"$cuisine"}}]) */

/*19. db.restaurents.update({restaurant_id:"40356018"},{$inc:{"grades.0.score":10}}) */