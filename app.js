let banner = document.querySelector(".banner img");
let banners =["./assets/banner/b2.webp","./assets/banner/b3.webp","./assets/banner/banner1.webp","./assets/banner/b4.webp","./assets/banner/b5.webp"];
let i=0;
function bannerChange(banners){
    setInterval(()=>{
         banner.setAttribute('src',banners[i]);
         i=(i+1)% banners.length;
    },2000)
   
}
bannerChange(banners);
