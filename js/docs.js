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
	//imgs
	Click2 = (e) => {
		PopupMsg(e.target.alt,'<div class="text-center"><img src="' + e.target.src + '"/></div>');
	}
	let arr = $('#docs-right-content > img');
	for(let i = arr.length - 1; i > -1; i--){
		//add href
		arr[i].onclick = Click2;
	}
}