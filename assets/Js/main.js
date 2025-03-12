 const dateFormEl=document.querySelector('#dateForm')
const dayImgEl=document.querySelector('#dayImg')
//  https://srirangaminfo.com/cal/2025/big/0103.jpg 

dateFormEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputDate=e.target[0].value
   processDate(inputDate);
})

function processDate(date){
     const myDate=date?new Date(date):new Date();
    const result=myDate.toLocaleDateString("en-IN",{
        day:"2-digit",
        month:"2-digit",
    })
    
    const formatDate=result.replaceAll("/","");
    console.log(myDate.getFullYear());
    console.log(formatDate);
    
    
    const formatedurl=`https://srirangaminfo.com/cal/${myDate.getFullYear()}/big/${formatDate}.jpg`
    
    dayImgEl.src=formatedurl;
    dayImgEl.alt=formatDate
    dayImgEl.classList.remove('hidden')  
    
};

