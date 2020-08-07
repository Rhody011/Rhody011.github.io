window.onload=function(){
    let likesButton = document.getElementById('likes-btn');
likesButton.addEventListener('click', function(){
    let likesInfo = document.getElementById('likess');
    if (likesInfo.classList.contains('likes')){
        likesInfo.classList.remove('likes');
    } else {
        likesInfo.classList.add('likes');
    }
});
  };