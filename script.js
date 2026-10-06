const locations=["Vijayawada","Guntur","Tirupati","Hyderabad","Bengaluru","Chennai","Visakhapatnam","Mumbai","Delhi","Kolkata","Pune","Kochi"];
const defaultEvents=[
{name:"Avatar: Fire and Ash",type:"Movie",date:"Today, 7:30 PM",venue:"PVR Cinemas",price:220,rating:"8.7",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"},
{name:"The Last Journey",type:"Movie",date:"Tomorrow, 6:00 PM",venue:"INOX",price:180,rating:"8.2",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"},
{name:"Midnight Story",type:"Movie",date:"Today, 9:00 PM",venue:"Cinepolis",price:200,rating:"8.5",image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80"},
{name:"Dune: Part Three",type:"Movie",date:"Tomorrow, 8:30 PM",venue:"PVR Cinemas",price:250,rating:"8.9",image:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80"},
{name:"Neon City",type:"Movie",date:"Sat, 7:00 PM",venue:"AMB Cinemas",price:210,rating:"8.1",image:"https://images.unsplash.com/photo-1518930259200-2a3f3a1f0a0d?auto=format&fit=crop&w=700&q=80"},
{name:"Shadow Protocol",type:"Movie",date:"Sun, 6:45 PM",venue:"INOX",price:190,rating:"8.4",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"},
{name:"Love in December",type:"Movie",date:"Mon, 5:30 PM",venue:"Cinepolis",price:180,rating:"7.9",image:"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=700&q=80"},
{name:"The Final Signal",type:"Movie",date:"Tue, 8:00 PM",venue:"PVR Cinemas",price:230,rating:"8.6",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"},
{name:"Galaxy Rangers",type:"Movie",date:"Wed, 7:15 PM",venue:"AMB Cinemas",price:240,rating:"8.3",image:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=700&q=80"},
{name:"Hidden Truth",type:"Movie",date:"Thu, 6:30 PM",venue:"INOX",price:200,rating:"8.0",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"},
{name:"Dream Chasers",type:"Movie",date:"Fri, 5:45 PM",venue:"Cinepolis",price:170,rating:"8.2",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"},
{name:"Kingdom of Fire",type:"Movie",date:"Sat, 9:15 PM",venue:"PVR Cinemas",price:260,rating:"8.8",image:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80"},
{name:"Sunburn Arena",type:"Concert",date:"18 Oct 2026",venue:"Gachibowli Stadium",price:1499,rating:"4.9",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=80"},
{name:"Arijit Singh Live",type:"Concert",date:"25 Oct 2026",venue:"Bengaluru Palace",price:1999,rating:"4.8",image:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80"},
{name:"Anirudh Live",type:"Concert",date:"2 Nov 2026",venue:"LB Stadium",price:1799,rating:"4.9",image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80"},
{name:"Indie Music Fest",type:"Concert",date:"8 Nov 2026",venue:"Phoenix Arena",price:999,rating:"4.6",image:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80"},
{name:"Rock Legends Live",type:"Concert",date:"15 Nov 2026",venue:"Palace Grounds",price:1299,rating:"4.7",image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=80"},
{name:"Bollywood Beats",type:"Concert",date:"22 Nov 2026",venue:"NSIC Grounds",price:1199,rating:"4.7",image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80"},
{name:"EDM Night",type:"Concert",date:"29 Nov 2026",venue:"Hitex Open Arena",price:899,rating:"4.5",image:"https://images.unsplash.com/photo-1571266028243-d220c2e0d5d4?auto=format&fit=crop&w=700&q=80"},
{name:"Classical Evening",type:"Concert",date:"5 Dec 2026",venue:"Ravindra Bharathi",price:699,rating:"4.8",image:"https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=700&q=80"},
{name:"K-Pop Night",type:"Concert",date:"12 Dec 2026",venue:"Yashwanth Rao Hall",price:1499,rating:"4.8",image:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80"},
{name:"Acoustic Sessions",type:"Concert",date:"19 Dec 2026",venue:"The Grand Stage",price:799,rating:"4.6",image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80"},
{name:"DJ Storm Live",type:"Concert",date:"26 Dec 2026",venue:"Skyline Arena",price:1099,rating:"4.5",image:"https://images.unsplash.com/photo-1571266028243-d220c2e0d5d4?auto=format&fit=crop&w=700&q=80"},
{name:"New Year Music Fest",type:"Concert",date:"31 Dec 2026",venue:"City Grounds",price:1599,rating:"4.9",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=80"},
{name:"Comedy Night Live",type:"Event",date:"5 Oct 2026",venue:"Shilpakala Vedika",price:599,rating:"4.8",image:"https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=700&q=80"},
{name:"Tech Expo 2026",type:"Event",date:"15 Oct 2026",venue:"HITEX",price:299,rating:"4.6",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80"},
{name:"Food & Culture Fest",type:"Event",date:"20 Oct 2026",venue:"Exhibition Grounds",price:249,rating:"4.7",image:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80"},
{name:"Startup Summit",type:"Event",date:"28 Oct 2026",venue:"Novotel Convention Centre",price:499,rating:"4.6",image:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=700&q=80"},
{name:"Comic & Gaming Fest",type:"Event",date:"6 Nov 2026",venue:"BIEC",price:399,rating:"4.8",image:"https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=700&q=80"},
{name:"Photography Workshop",type:"Event",date:"13 Nov 2026",venue:"Art District Hall",price:699,rating:"4.5",image:"https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=700&q=80"},
{name:"Stand-Up Special",type:"Event",date:"20 Nov 2026",venue:"The Laugh Factory",price:799,rating:"4.9",image:"https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=700&q=80"},
{name:"Art & Design Fair",type:"Event",date:"27 Nov 2026",venue:"Kala Gallery",price:199,rating:"4.4",image:"https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=700&q=80"},
{name:"Gaming Championship",type:"Event",date:"4 Dec 2026",venue:"Cyber Arena",price:499,rating:"4.7",image:"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80"},
{name:"Book & Literature Fest",type:"Event",date:"11 Dec 2026",venue:"City Convention Hall",price:149,rating:"4.6",image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80"},
{name:"Fitness Expo",type:"Event",date:"18 Dec 2026",venue:"Sports Complex",price:299,rating:"4.5",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80"},
{name:"Christmas Carnival",type:"Event",date:"25 Dec 2026",venue:"Central Park Grounds",price:349,rating:"4.8",image:"https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=700&q=80"}
];
let events=JSON.parse(localStorage.getItem("showmintEvents"))||defaultEvents;
if(localStorage.getItem("showmintCatalogVersion")!=="2"){
 const names=new Set(events.map(e=>e.name));
 events=events.concat(defaultEvents.filter(e=>!names.has(e.name)));
 localStorage.setItem("showmintEvents",JSON.stringify(events));
 localStorage.setItem("showmintCatalogVersion","2");
}
let currentUser=JSON.parse(localStorage.getItem("showmintCurrentUser"))||null;
let selectedRole="user";

function users(){return JSON.parse(localStorage.getItem("showmintUsers"))||[]}
function saveEvents(){localStorage.setItem("showmintEvents",JSON.stringify(events))}
function go(id){
 if(!currentUser){openAuth("login");return}
 document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");
 if(id==="movies")renderCards("Movie","movieCards");if(id==="concerts")renderCards("Concert","concertCards");if(id==="events")renderCards("Event","eventCards");
 if(id==="myBookings")renderBookings();if(id==="admin"){if(currentUser.role!=="admin"){go("home");return}renderAdmin()}window.scrollTo(0,0)
}
function renderCards(type,id,data=events.filter(e=>!type||e.type===type)){
 document.getElementById(id).innerHTML=data.map(e=>`<div class="card"><div class="card-img" style="background-image:url('${e.image}')"></div><div class="card-body"><h3>${e.name}</h3><p>${e.type} • ⭐ ${e.rating||"New"}</p><p>📅 ${e.date}</p><p>📍 ${e.venue}</p><div class="row"><span class="price">₹${e.price}</span><button class="book" onclick='openBooking(${JSON.stringify(e)})'>Book</button></div></div></div>`).join("")
}

function renderHome(){renderCards("","homeCards",events.slice(0,4))}
function updateHeader(){
 let h=document.getElementById("headerUser");
 if(currentUser)h.innerHTML=`<button class="user-btn" onclick="openLocation()">📍 ${localStorage.getItem("showmintLocation")||"Set Location"}</button><button class="user-btn" onclick="${currentUser.role==="admin"?"go('admin')":"go('myBookings')"}">👤 ${currentUser.name}</button><button class="user-btn pink" onclick="logout()">Logout</button>`;
 else h.innerHTML=`<button class="user-btn pink" onclick="openAuth('login')">Login / Signup</button>`;
}
function openAuth(mode="login"){document.getElementById("authModal").style.display="flex";renderAuth(mode)}
function closeAuth(){document.getElementById("authModal").style.display="none"}
function renderAuth(mode){
 document.getElementById("authContent").innerHTML=mode==="login"?`<div class="auth-form"><div class="auth-tabs"><button class="tab active" onclick="renderAuth('login')">Login</button><button class="tab" onclick="renderAuth('signup')">Sign Up</button></div><p class="tag">WELCOME BACK</p><h2>Welcome back 👋</h2><p class="muted">Login using your mobile number.</p><label>Mobile Number</label><input id="loginMobile" type="tel" maxlength="10" placeholder="10-digit mobile number"><label>Password</label><input id="loginPass" type="password" placeholder="Password"><label>Role</label><select id="loginRole"><option value="user">User</option><option value="admin">Admin</option></select><button class="primary full" onclick="login()">Login</button><p class="demo">Admin: 9999999999 / admin123</p><p class="demo">User: 8888888888 / user123</p></div>`:
`<div class="auth-form"><div class="auth-tabs"><button class="tab" onclick="renderAuth('login')">Login</button><button class="tab active" onclick="renderAuth('signup')">Sign Up</button></div><p class="tag">CREATE ACCOUNT</p><h2>Create account ✨</h2><p class="muted">Create your ShowMint account.</p><label>Full Name</label><input id="signupName" placeholder="Your name"><label>Mobile Number</label><input id="signupMobile" type="tel" maxlength="10" placeholder="10-digit mobile number"><label>Email <span class="optional">(optional)</span></label><input id="signupEmail" placeholder="you@example.com"><label>Password</label><input id="signupPass" type="password" placeholder="Minimum 6 characters"><label>Role</label><select id="signupRole"><option value="user">User</option><option value="admin">Admin</option></select><button class="primary full" onclick="signup()">Create Account</button></div>`;
}
function signup(){
 let name=document.getElementById("signupName").value.trim(),mobile=document.getElementById("signupMobile").value.trim(),email=document.getElementById("signupEmail").value.trim().toLowerCase(),pass=document.getElementById("signupPass").value,role=document.getElementById("signupRole").value;
 if(!name||!/\d{10}/.test(mobile)||!pass||pass.length<6){alert("Enter a valid 10-digit mobile number and a password of at least 6 characters.");return}
 let us=users();if(us.some(u=>u.mobile===mobile)){alert("This mobile number is already registered. Please login.");renderAuth("login");return}
 us.push({name,mobile,email,pass,role});localStorage.setItem("showmintUsers",JSON.stringify(us));alert("Account created successfully! Your account is saved on this browser. Please login.");renderAuth("login");
}
function login(){
 let mobile=document.getElementById("loginMobile").value.trim(),pass=document.getElementById("loginPass").value,role=document.getElementById("loginRole").value;
 let us=users();if(!us.length){us=[{name:"Admin",mobile:"9999999999",email:"admin@showmint.com",pass:"admin123",role:"admin"},{name:"User",mobile:"8888888888",email:"user@showmint.com",pass:"user123",role:"user"}];localStorage.setItem("showmintUsers",JSON.stringify(us))}
 let u=us.find(x=>x.mobile===mobile&&x.pass===pass&&x.role===role);if(!u){alert("Invalid mobile number, password or selected role.");return}
 currentUser=u;localStorage.setItem("showmintCurrentUser",JSON.stringify(u));closeAuth();updateHeader();if(u.role==="admin")go("admin");else if(!localStorage.getItem("showmintLocation"))openLocation();else go("home");
}
function logout(){currentUser=null;localStorage.removeItem("showmintCurrentUser");updateHeader();document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));document.getElementById("home").classList.remove("hidden");openAuth("login")}
function openLocation(){if(!currentUser){openAuth("login");return}document.getElementById("locationModal").style.display="flex";document.getElementById("locationInput").value="";filterLocations()}
function closeLocation(){document.getElementById("locationModal").style.display="none"}
function filterLocations(){
 let q=document.getElementById("locationInput").value.toLowerCase(),r=locations.filter(x=>x.toLowerCase().includes(q));
 document.getElementById("locationResults").innerHTML=r.map(x=>`<div class="location-item" onclick="setLocation('${x}')">📍 ${x}</div>`).join("")||"<p class='muted'>No location found.</p>"
}
function setLocation(x){localStorage.setItem("showmintLocation",x);closeLocation();updateHeader();alert("Location set to "+x)}
function useCurrentLocation(){
 if(!navigator.geolocation){alert("Location access is not supported. Please search and select a city.");return}
 navigator.geolocation.getCurrentPosition(()=>{setLocation("Current Location")},()=>alert("Location permission denied. Please search for your city."))
}
function openBooking(e){
 if(!currentUser){openAuth("login");return}
 if(!localStorage.getItem("showmintLocation")){openLocation();alert("Please set your location before booking.");return}
 document.getElementById("bookingModal").style.display="flex";
 document.getElementById("bookingContent").innerHTML=`<p class="tag">BOOK TICKETS</p><h2>${e.name}</h2><p class="muted">📍 ${e.venue} • ${e.date}</p><p class="current-location">📍 ${localStorage.getItem("showmintLocation")}</p><div class="screen"></div><div class="seats" id="seatBox"></div><div class="summary"><span>Selected: <b id="seatCount">0</b><br>Total: ₹<b id="total">0</b></span><button class="primary" onclick='confirmBooking(${JSON.stringify(e)})'>Confirm Booking</button></div>`;
 let box=document.getElementById("seatBox");for(let i=1;i<=40;i++){let s=document.createElement("button");s.className="seat";s.textContent=i;if([4,9,16,27,35].includes(i))s.classList.add("booked");s.onclick=()=>{if(!s.classList.contains("booked")){s.classList.toggle("selected");updateTotal(e.price)}};box.appendChild(s)}
}
function updateTotal(price){let n=document.querySelectorAll(".seat.selected").length;seatCount.textContent=n;total.textContent=n*price}
function closeBooking(){document.getElementById("bookingModal").style.display="none"}
function confirmBooking(e){
 let ss=[...document.querySelectorAll(".seat.selected")];if(!ss.length){alert("Select at least one seat.");return}
 let seats=ss.map(x=>x.textContent),amount=seats.length*e.price,bs=JSON.parse(localStorage.getItem("showmintBookings"))||[];
 let b={id:"TXR"+Date.now().toString().slice(-6),email:currentUser.email,name:e.name,date:e.date,venue:e.venue,location:localStorage.getItem("showmintLocation"),seats,total:amount};
 bs.push(b);localStorage.setItem("showmintBookings",JSON.stringify(bs));closeBooking();
 tName.textContent=e.name;tDate.textContent=e.date;tVenue.textContent=e.venue;tLocation.textContent=b.location;tSeats.textContent=seats.join(", ");tAmount.textContent=amount;tId.textContent=b.id;ticketModal.style.display="flex"
}
function closeTicket(){ticketModal.style.display="none"}
function renderBookings(){
 let bs=(JSON.parse(localStorage.getItem("showmintBookings"))||[]).filter(b=>b.email===currentUser.email);
 bookingsList.innerHTML=bs.length?bs.map(b=>`<div class="booking-item"><h3>${b.name}</h3><p class="muted">📅 ${b.date} • 📍 ${b.venue} • 🌍 ${b.location}</p><p>Seats: ${b.seats.join(", ")} | Amount: ₹${b.total}</p><p class="muted">Ticket ID: ${b.id}</p></div>`).join(""):"<p class='muted'>No bookings yet. Book your first experience!</p>"
}
function addEvent(){
 let name=newName.value.trim(),type=newType.value,venue=newVenue.value.trim(),date=newDate.value.trim(),price=Number(newPrice.value),image=newImage.value.trim()||"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80";
 if(!name||!venue||!date||!price){alert("Fill all required fields.");return}
 events.push({name,type,venue,date,price,rating:"New",image});saveEvents();newName.value=newVenue.value=newDate.value=newPrice.value=newImage.value="";renderAdmin();renderHome();alert("Event added successfully.")
}
function renderAdmin(){
 statEvents.textContent=events.length;let us=users(),bs=JSON.parse(localStorage.getItem("showmintBookings"))||[];statUsers.textContent=us.length;statBookings.textContent=bs.length;statRevenue.textContent="₹"+bs.reduce((a,b)=>a+b.total,0);
 adminEvents.innerHTML=events.map((e,i)=>`<div class="admin-event"><span>${e.name}<small class="muted"> ${e.type} • ₹${e.price}</small></span><button class="delete" onclick="deleteEvent(${i})">Delete</button></div>`).join("")
}
function deleteEvent(i){if(confirm("Delete this event?")){events.splice(i,1);saveEvents();renderAdmin();renderHome()}}
function searchEvents(){
 if(!currentUser){openAuth("login");return}
 let q=searchInput.value.toLowerCase().trim();if(!q){go("home");return}
 let r=events.filter(e=>(e.name+" "+e.type+" "+e.venue).toLowerCase().includes(q));go("events");renderCards("","eventCards",r)
}
renderHome();updateHeader();
if(!currentUser){setTimeout(()=>openAuth("login"),300)}
else if(!localStorage.getItem("showmintLocation"))setTimeout(()=>openLocation(),400);
function downloadTicket(){
 const name=document.getElementById("tName").textContent;
 const date=document.getElementById("tDate").textContent;
 const venue=document.getElementById("tVenue").textContent;
 const location=document.getElementById("tLocation").textContent;
 const seats=document.getElementById("tSeats").textContent;
 const amount=document.getElementById("tAmount").textContent;
 const id=document.getElementById("tId").textContent;

 const ticket=`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>ShowMint Ticket</title>
<style>
body{font-family:Arial;background:#eee;padding:30px}
.ticket{max-width:500px;margin:auto;background:white;padding:30px;border-radius:16px}
.logo{font-size:28px;font-weight:bold}.logo span{color:#ff3d71}
.tag{color:#ff3d71;font-weight:bold;letter-spacing:2px}
.info{border-top:1px dashed #aaa;border-bottom:1px dashed #aaa;padding:15px 0;margin:20px 0}
p{margin:12px 0}.id{color:#777}
</style></head><body>
<div class="ticket">
<div class="logo">Show<span>Mint</span></div>
<p class="tag">BOOKING CONFIRMED</p>
<h2>${escapeHtml(name)}</h2>
<div class="info">
<p><b>Date:</b> ${escapeHtml(date)}</p>
<p><b>Venue:</b> ${escapeHtml(venue)}</p>
<p><b>Location:</b> ${escapeHtml(location)}</p>
<p><b>Seats:</b> ${escapeHtml(seats)}</p>
<p><b>Amount:</b> ₹${escapeHtml(amount)}</p>
</div>
<p class="id">Ticket ID: ${escapeHtml(id)}</p>
<p>Thank you for booking with ShowMint.</p>
</div></body></html>`;

 const blob=new Blob([ticket],{type:"text/html"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url;
 a.download=`ShowMint_Ticket_${id}.html`;
 document.body.appendChild(a);
 a.click();
 a.remove();
 URL.revokeObjectURL(url);
}

function escapeHtml(value){
 return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
