//1.  mongoimport --db restaurants --collection restaurants json_filename_with_path

//5.  db.restaurants.find({borough:"Bronx"}).sort({name:-1}) 

/*10. db.restaurants.aggregate([{$match:{borough:"Bronx",cuisine:{$in:['Italian','Bakery']}}},{$group:{_id:"$cuisine", count:{$sum:1}}}])  */

/*11. db.restaurants.aggregate([{$match:{borough:"Brooklyn"}},{$group:{_id:"$cuisine"}}]) */

/*19. db.restaurants.update({restaurant_id:"40356018"},{$inc:{"grades.0.score":10}}) */