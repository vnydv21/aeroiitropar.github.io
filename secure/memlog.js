// to add member details
const members = new Map();
members.set(
    'Shraman Maiti',{
        imgsrc: 'Shraman.webp',
        role: 'Mentor',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'Ankur Agarwal',{
        imgsrc: 'Ankur.webp',
        role: 'Representative',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'Yash Rai',{
        imgsrc: 'Yash.webp',
        role: 'Designs',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'Prathmesh Bawankar',{
        imgsrc: 'Prathmesh.webp',
        role: 'Propulsions',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'S S Susanth Reddy',{
        imgsrc: 'Susanth.webp',
        role: 'Circuits',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'Pranav Bali',{
        imgsrc: 'Pranav.webp',
        role: 'Control',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'Vinay Yadav',{
        imgsrc: 'Vinay.webp',
        role: 'Control',
        instagram: "https://www.instagram.com/kpskyvnzt/",
        linkedin: 'https://www.linkedin.com/in/vy503/'
    });
members.set(
    'Ayush Singh',{
        imgsrc: 'Ayush.webp',
        role: 'Media',
        instagram: "#",
        linkedin: '#'
    });
members.set(
    'Mahir Kumar',{
        imgsrc: 'Mahir.webp',
        role: 'Media',
        instagram: "#",
        linkedin: '#'
    });

container = document.getElementById('team');
const official = 2;
container.innerHTML = "";
container.innerHTML = "<h1 id='teamLabel'>THE TEAM</h1>";

const container1 = document.createElement('div');
container1.className = 'container';

const container2 = document.createElement('div');
container2.className = 'container';

var count = 0;

container1.innerHTML = "<h1><span>THEIR EXCELLENCY</span></h1>";
container2.innerHTML = "<h1><span>LEADERS</span></h1>";

for (let [key, value] of members)
{
    var someHTML = "<div class='member'>\
        <img src='../images/profiles/"+value.imgsrc+"'>\
        <p class='user-details'><b>"+key+"</b><br>"+value.role+"</p>\
        <div class='member-socials'>\
            <a href='"+value.instagram+"'><i class='fa-brands fa-instagram'></i></a>\
            <a href='"+value.linkedin+"'><i class='fa-brands fa-linkedin'></i></a>\
            </div>\
        </div>";

    if (count < official){
        container1.innerHTML += someHTML;
    }
    else{
        container2.innerHTML += someHTML;
    }
    count++;
}

container.appendChild(container1);
container.appendChild(container2);