*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

:root{
--bg:#0f172a;
--card:#1e293b;
--card-hover:#334155;
--primary:#3b82f6;
--success:#22c55e;
--danger:#ef4444;
--text:#ffffff;
--muted:#94a3b8;
--border:#334155;
}

body{
background:var(--bg);
color:var(--text);
min-height:100vh;
overflow-x:hidden;
}

.page{
display:none;
min-height:100vh;
}

.page.active{
display:flex;
}

/* LOGIN - REGISTER */

#loginPage,
#registerPage{
justify-content:center;
align-items:center;
padding:20px;
}

.auth-card{
width:100%;
max-width:420px;
background:var(--card);
padding:35px;
border-radius:24px;
display:flex;
flex-direction:column;
gap:15px;
box-shadow:
0 15px 40px rgba(0,0,0,.35);
}

.auth-card h1{
text-align:center;
font-size:32px;
margin-bottom:10px;
}

.auth-card input{
height:52px;
padding:0 15px;
border:none;
border-radius:12px;
font-size:15px;
outline:none;
}

.auth-card button{
height:52px;
border:none;
border-radius:12px;
cursor:pointer;
font-size:15px;
font-weight:600;
transition:.3s;
}

.auth-card button:hover{
transform:translateY(-2px);
}

.auth-card button:first-of-type{
background:var(--primary);
color:white;
}

/* DASHBOARD */

#dashboardPage{
flex-direction:column;
}

.dashboard-layout{
width:100%;
min-height:100vh;
}

/* TOPBAR */

.topbar{
height:80px;
background:#111827;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 30px;
border-bottom:1px solid var(--border);
}

.logo{
display:flex;
align-items:center;
gap:10px;
font-size:24px;
font-weight:700;
}

.topbar-right{
display:flex;
align-items:center;
gap:15px;
}

.coin-box,
.user-box{
background:var(--card);
padding:10px 16px;
border-radius:12px;
display:flex;
align-items:center;
gap:8px;
}

.logout-btn{
background:var(--danger);
color:white;
border:none;
padding:10px 18px;
border-radius:12px;
cursor:pointer;
font-weight:600;
}

/* CONTENT */

.dashboard-content{
padding:40px;
}

.dashboard-content h2{
font-size:32px;
margin-bottom:25px;
}

/* GAME GRID */

.game-grid{
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.game-card{
background:var(--card);
border-radius:20px;
padding:30px;
cursor:pointer;
transition:.3s;
border:1px solid transparent;
}

.game-card:hover{
transform:translateY(-8px);
border-color:var(--primary);
box-shadow:
0 15px 35px rgba(59,130,246,.25);
}

.game-icon{
font-size:60px;
margin-bottom:20px;
}

.game-card h3{
font-size:24px;
margin-bottom:10px;
}

.game-card p{
color:var(--muted);
}

/* ADMIN */

#adminPage{
width:100%;
}

.admin-layout{
display:flex;
width:100%;
min-height:100vh;
}

.admin-sidebar{
width:260px;
background:#111827;
padding:25px;
display:flex;
flex-direction:column;
gap:12px;
border-right:1px solid var(--border);
}

.admin-sidebar h2{
margin-bottom:10px;
}

.admin-sidebar button{
height:50px;
border:none;
border-radius:12px;
cursor:pointer;
background:var(--card);
color:white;
transition:.3s;
}

.admin-sidebar button:hover{
background:var(--primary);
}

.admin-content{
flex:1;
padding:30px;
overflow:auto;
}

/* STATS */

.admin-stats{
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));
gap:20px;
margin-bottom:30px;
}

.stat-card{
background:var(--card);
padding:25px;
border-radius:18px;
}

.stat-card h3{
font-size:16px;
color:var(--muted);
margin-bottom:10px;
}

.stat-card span{
font-size:30px;
font-weight:700;
}

/* ADMIN TABS */

.admin-tab{
display:none;
background:var(--card);
padding:25px;
border-radius:20px;
}

.active-tab{
display:block;
}

.admin-tab h2{
margin-bottom:20px;
}

.admin-tab input{
width:100%;
height:50px;
padding:0 15px;
margin-bottom:12px;
border:none;
border-radius:10px;
}

.admin-tab button{
height:50px;
padding:0 20px;
border:none;
border-radius:10px;
cursor:pointer;
background:var(--primary);
color:white;
font-weight:600;
}

/* TABLES */

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

th{
background:#111827;
padding:14px;
text-align:left;
}

td{
padding:14px;
border-bottom:1px solid var(--border);
}

tr:hover{
background:rgba(255,255,255,.03);
}

/* MOBILE */

@media(max-width:900px){

.admin-layout{
flex-direction:column;
}

.admin-sidebar{
width:100%;
}

.topbar{
flex-direction:column;
height:auto;
padding:15px;
gap:15px;
}

.topbar-right{
flex-wrap:wrap;
justify-content:center;
}

.dashboard-content{
padding:20px;
}

}

@media(max-width:600px){

.auth-card{
padding:25px;
}

.game-grid{
grid-template-columns:1fr;
}

.logo{
font-size:20px;
}

.dashboard-content h2{
font-size:24px;
}

}
