
function heart_red() {
        // let heart = document.querySelector('.heart');
        let heart = document.getElementsByClassName('heart')[0];

        let likes = document.getElementsByClassName('likes')[0];

            if (heart.src.match('img/heart.png')) 
            {
                heart.src = 'img/heart_red.png';
                likes.innerHTML="3,445 likes"
            }
            else{
                heart.src = 'img/heart.png';
                likes.innerHTML="3,444 likes"
            }

        }

