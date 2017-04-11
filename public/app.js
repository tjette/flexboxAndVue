console.log("I MADE IT!!")

var swApp = new Vue({
	el: "#component",
	data: {
	characters: []	
	}
})

function fetchData(){
	fetch('/api/starwars/')
	.then(blob => blob.json())
	.then(data =>{
		swApp.characters = data

	})
	.catch(e =>e)


}

fetchData();

console.log(swApp.data);