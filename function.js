//Hello higher order functions ES6
shapes = [{type: "circle" ,color: "meroon", size: "small"} , {type: "square", color: "red", size:"medium"}]

function mediumShape (shapes) {
const results = shapes.filter(shape =>{
    if (shape.size != small) {
        return shape.type;
    }
})
return results;
}
