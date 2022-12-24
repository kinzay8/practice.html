const skyDivingContainer = $("#sky-diving-container");
const imageUrl = "./assets/images/"



// //////////////////
//////Sky Diving///////
///////////////////

// onclick show all cards
$.getJson("./data/skydiving.json", function(data){
    skyDivingContainer.html(makeProductRow("Sky Diving",data,null))
})