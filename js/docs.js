/*
================================
|							   |
|             /docs            |
|							   |
================================
*/
function InitPageDocs(){
	document.title = title;
	tagLeftContent = document.getElementById('docs-left-content');
	tagLR_Gap = document.getElementById('docs-gap_lr');
	tagRight = document.getElementById('docs-right');
	
	//toggle button event
	Click = () => {
		if(allowClick){
			if(tagLeftContent.classList.contains('opened')){
				tagLeftContent.classList.remove("opened");
				tagLeftContent.parentNode.classList.remove('opened');
				tagLR_Gap.classList.remove('opened');
				//tagRight.hidden = false;
				tagRight.classList.remove('opened');
			}
			else{
				tagLeftContent.classList.add("opened");
				tagLeftContent.parentNode.classList.add('opened');
				tagLR_Gap.classList.add('opened');
				tagRight.classList.add('opened');
			}
			allowClick = false;
			setTimeout(()=>{
				allowClick = true;
			},750);
		}
	};

	//adding extras
	const tagRightContent = document.getElementById('docs-right-content');
	//imgs
	Click2 = (e) => {
		PopupMsg(e.target.alt,'<div class="text-center"><img class="mw-100" src="' + e.target.src + '"/></div>');
	}
	let arr = $('img');
	let i = 0;
	for(i = arr.length - 1; i > -1; i--)
		if(IsElInEl(arr[i],tagRightContent)){
		//add href
		arr[i].onclick = Click2;
	}
	//a
	arr = $('a');
	for(i = arr.length - 1; i > -1; i--)
		if(IsElInEl(arr[i],tagRightContent))
			arr[i].classList.add('docs-link');
}

function IsElInEl(el,parent){
	while(el != null){
		el = el.parentElement;
		if(el == parent) return true;
	}
	return false;
}