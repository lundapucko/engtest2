/*Function for displaying different pages*/
function showPage(i){
	const pages = document.getElementsByTagName('section');
	for (j = 0; j < pages.length; j++){
		if(j==i){
			pages[j].style.display="block";					
		}else{
			pages[j].style.display="none";
		}
	}
}

function redo(){
	showPage(0);	
}