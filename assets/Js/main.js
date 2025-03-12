 const dateFormEl=document.querySelector('#dateForm')
const dayImgEl=document.querySelector('#dayImg')
//  https://srirangaminfo.com/cal/2025/big/0103.jpg 
const myDate=new Date();
const result=myDate.toLocaleDateString("en-IN",{
    day:"2-digit",
    month:"2-digit",
})


const formatDate=result.replaceAll("/","");

const formatedurl=`https://srirangaminfo.com/cal/2025/big/${formatDate}.jpg`

dayImgEl.src=formatedurl;
dayImgEl.alt=formatDate
dayImgEl.classList.remove('hidden')


