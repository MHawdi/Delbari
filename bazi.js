
            

            const score={
                wins:0,
                losses:0,
                ties:0
            }

            ShowScore();
           /*ShowResult();*/

            function playGame(playerMove){

                const computerMove=PickComputerMove()

            let result='';

            if(playerMove==='قیچی')
            {
            if (computerMove === 'سنگ')
                {result='باختی ولی دووشواری نداریم که'}
                else if (computerMove === 'کاغذ')
                {result='آفرین قیزیم بردییییی  باهوش کی بودی توووو'}
                else if (computerMove==='قیچی')
                {result='مساوی شد ولی از نظر من تو بردی'}
            }
            
                else if(playerMove === 'کاغذ'){
                    if (computerMove === 'سنگ')
                 {result='آفرین قیزیم بردییییی  باهوش کی بودی توووو'}    
                else if (computerMove === 'کاغذ')
                {result='مساوی شد ولی از نظر من تو بردی'}
                else if (computerMove==='قیچی')
                {result='باختی ولی دووشواری نداریم که'}
                }

                else if(playerMove === 'سنگ'){

                    if (computerMove === 'سنگ')
                {result='مساوی شد ولی از نظر من تو بردی'}
                else if (computerMove === 'کاغذ')
                {result='باختی ولی دووشواری نداریم که'}
                else if (computerMove==='قیچی')
                {result='آفرین قیزیم بردییییی  باهوش کی بودی توووو'}

                }

                if (result === 'آفرین قیزیم بردییییی  باهوش کی بودی توووو'){
                    score.wins +=1}
                    else if(result === 'باختی ولی دووشواری نداریم که'){
                    score.losses +=1}
                    else if( result === 'مساوی شد ولی از نظر من تو بردی' ){
                    score.ties += 1  }
                    
            document.querySelector('.end-result').innerHTML=
                result ;

            document.querySelector('.show-move').innerHTML=
            `
            <div class="move">
                <div>
                انتخاب تو </div>
                <div>
                <img src="${playerMove}.png" class="move-icon">
                </div>
                <div>
                <img src="${computerMove}.png" class="move-icon">    
                </div>

                <div>
                انتخاب کامپیوتر
                </div> 
            </div>
        `
            
            ShowScore();       
            

            };


            function ShowScore (){
                document.querySelector('.js-showscore').innerHTML=
                `بردها:${score.wins},باخت ها:${score.losses},مساوی ها:${score.ties}`}

                 

           function PickComputerMove (){
            const randomNumber= Math.random();
           
            if (randomNumber >=0 && randomNumber < 1/3)
               {computerMove = 'سنگ';}
               else if (randomNumber>=1/3 && randomNumber<2/3)
               {computerMove = 'کاغذ'}
               else if (randomNumber>=2/3 && randomNumber<1)
               {computerMove='قیچی'}

            
            return computerMove;

           }