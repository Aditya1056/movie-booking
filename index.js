nav_bar=document.querySelectorAll(".nav-items");
contact_nav=document.getElementsByClassName("nav-2");
contact_item=document.getElementsByClassName("contact");
movies_list=document.querySelectorAll(".movie-content");
movie_display=document.getElementById("movie-book");

var connectors=[];
nav_bar.forEach(element => {
    new_id=element.classList[1];
    id_content=document.getElementById(new_id);
    connectors.push(id_content);
});
// console.log(connectors);
home=nav_bar[0];
home.classList.add("active");
nav_bar.forEach(nav_item => {
    nav_item.addEventListener('click', (event) => {
        nav_item.classList.add("active");
        nav_bar.forEach(other_items => {
            if(other_items!=nav_item){
                other_items.classList.remove("active");
            }
        })
        // console.log(contact_nav[0]);
        contact_nav[0].classList.remove("active");
        console.log(contact_nav[0]);
        id=nav_item.classList[1];
        content=document.getElementById(id);
        content.style.display='block';
        content.style.marginTop="9rem";
        connectors.forEach(others => {
            if(others!=content){
                others.style.display='none';
            }
        })
        contact_item[0].style.display='none';
        movie_display.style.display='none';
    })
});
contact_nav[0].addEventListener('click',(event) =>{
    contact_item[0].style.display='block';
    contact_item[0].style.marginTop="9rem";
    // console.log(contact_nav[0]);
    contact_nav[0].classList.add("active");
    // console.log(contact_nav[0]);
    nav_bar.forEach(other_items => {
            other_items.classList.remove("active");
    })
    connectors.forEach(other => {
            other.style.display='none';
    })
    movie_display.style.display='none';
});
genres_list=document.querySelectorAll(".types");
genres_content=document.getElementById("page_4");
// console.log(genres_list);
// console.log(genres_content);
genres_list.forEach(item => {
    item.addEventListener('click',(event) => {
        genres_content.style.display='block';
        genres_content.style.marginTop="9rem";
        connectors.forEach(other => {
            if(genres_content!=other)
                other.style.display='none';
        })
        contact_item[0].style.display='none';
        movie_display.style.display='none';
        nav_bar.forEach(other_items => {
            if(other_items.classList[1]=="page_4"){
                other_items.classList.add("active");
            }
            else{
                other_items.classList.remove("active");
            }
        })
    })
});
genres_page=document.querySelectorAll(".list-items");
genres_page.forEach(item => {
    item.addEventListener('click',(event) => {
        genres_content.style.display='block';
        genres_content.style.marginTop="9rem";
        connectors.forEach(other => {
            if(genres_content!=other)
                other.style.display='none';
        })
        contact_item[0].style.display='none';
        movie_display.style.display='none';
        nav_bar.forEach(other_items => {
            if(other_items.classList[1]=="page_4"){
                other_items.classList.add("active");
            }
            else{
                other_items.classList.remove("active");
            }
        })
    })
});
movies_list.forEach(ele => {
    ele.addEventListener('click',(event) => {
        connectors.forEach(others => {
            others.style.display='none';
        })
        contact_item[0].style.display='none';
        movie_display.style.display='block';
        nav_bar.forEach(other_items => {
            if(other_items.classList[1]=="page_4"){
                other_items.classList.add("active");
            }
            else{
                other_items.classList.remove("active");
            }
        })
    })
});

