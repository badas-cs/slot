/* =========================
   DATABASE INIT
========================= */

function initializeDatabase() {

    if (!localStorage.getItem("users")) {

        const users = [
            {
                id: 1,
                username: "admin",
                password: "admin123",
                role: "admin",
                balance: 100000,
                wheelSpins: 999
            }
        ];

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
    }

    if (!localStorage.getItem("logs")) {

        localStorage.setItem(
            "logs",
            JSON.stringify([])
        );
    }
}

/* =========================
   PAGE CONTROL
========================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }
}

/* =========================
   REGISTER
========================= */

function register() {

    const username =
        document.getElementById(
            "registerUsername"
        ).value.trim();

    const password =
        document.getElementById(
            "registerPassword"
        ).value.trim();

    if (!username || !password) {

        alert("Tüm alanları doldurun.");
        return;
    }

    let users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];

    const exists =
        users.find(
            u => u.username === username
        );

    if (exists) {

        alert("Bu kullanıcı zaten mevcut.");
        return;
    }

    users.push({

        id: Date.now(),

        username,

        password,

        role: "user",

        balance: 1000,

        wheelSpins: 3
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Kayıt başarılı.");

    showPage("loginPage");
}

/* =========================
   LOGIN
========================= */

function login() {

    const username =
        document.getElementById(
            "loginUsername"
        ).value.trim();

    const password =
        document.getElementById(
            "loginPassword"
        ).value.trim();

    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];

    const user =
        users.find(
            u =>
                u.username === username &&
                u.password === password
        );

    if (!user) {

        alert("Hatalı kullanıcı adı veya şifre.");
        return;
    }

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    addLog(
        user.username,
        "LOGIN"
    );

    if (user.role === "admin") {

        loadAdminPanel();

        showPage("adminPage");

    } else {

        loadUserDashboard();

        showPage("dashboardPage");
    }
}

/* =========================
   LOGOUT
========================= */

function logout() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

    if (currentUser) {

        addLog(
            currentUser.username,
            "LOGOUT"
        );
    }

    localStorage.removeItem(
        "currentUser"
    );

    showPage("loginPage");
}

/* =========================
   USER DASHBOARD
========================= */

function loadUserDashboard() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

    if (!user) return;

    const balance =
        document.getElementById(
            "balance"
        );

    if (balance) {

        balance.innerText =
            user.balance;
    }

    const currentUsername =
        document.getElementById(
            "currentUsername"
        );

    if (currentUsername) {

        currentUsername.innerText =
            user.username;
    }
}

/* =========================
   LOG SYSTEM
========================= */

function addLog(
    username,
    action
) {

    const logs =
        JSON.parse(
            localStorage.getItem(
                "logs"
            )
        ) || [];

    logs.unshift({

        username,

        action,

        time:
            new Date()
                .toLocaleString("tr-TR")
    });

    localStorage.setItem(
        "logs",
        JSON.stringify(logs)
    );
}

/* =========================
   ADMIN PANEL
========================= */

function loadAdminPanel() {

    updateStats();

    renderUsers();

    renderLogs();

    openAdminTab("usersTab");
}

/* =========================
   STATS
========================= */

function updateStats() {

    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];

    const totalUsers =
        users.filter(
            u => u.role === "user"
        ).length;

    const totalCoins =
        users.reduce(
            (sum, user) =>
                sum + Number(user.balance),
            0
        );

    const totalUsersElement =
        document.getElementById(
            "totalUsers"
        );

    if (totalUsersElement) {

        totalUsersElement.innerText =
            totalUsers;
    }

    const totalCoinsElement =
        document.getElementById(
            "totalCoins"
        );

    if (totalCoinsElement) {

        totalCoinsElement.innerText =
            totalCoins.toLocaleString();
    }
}

/* =========================
   USER TABLE
========================= */

function renderUsers() {

    const table =
        document.getElementById(
            "userTable"
        );

    if (!table) return;

    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];

    table.innerHTML = "";

    users
        .filter(
            u => u.role === "user"
        )
        .forEach(user => {

            table.innerHTML += `

            <tr>

                <td>${user.id}</td>

                <td>${user.username}</td>

                <td>${user.balance}</td>

                <td>

                    <button
                    onclick="deleteUser(${user.id})">

                    Sil

                    </button>

                </td>

            </tr>

            `;
        });
}

/* =========================
   DELETE USER
========================= */

function deleteUser(id) {

    if (
        !confirm(
            "Kullanıcı silinsin mi?"
        )
    ) {
        return;
    }

    let users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];

    users =
        users.filter(
            u => u.id !== id
        );

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    renderUsers();

    updateStats();
}

/* =========================
   COIN LOAD
========================= */

function addCoin() {

    const username =
        document.getElementById(
            "coinUsername"
        ).value.trim();

    const amount =
        Number(
            document.getElementById(
                "coinAmount"
            ).value
        );

    if (
        !username ||
        !amount
    ) {
        return;
    }

    let users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];

    const user =
        users.find(
            u =>
                u.username === username
        );

    if (!user) {

        alert(
            "Kullanıcı bulunamadı."
        );

        return;
    }

    user.balance += amount;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    updateStats();

    renderUsers();

    alert(
        "Coin yüklendi."
    );
}

/* =========================
   SPIN LOAD
========================= */

function addSpin() {

    const username =
        document.getElementById(
            "spinUsername"
        ).value.trim();

    const amount =
        Number(
            document.getElementById(
                "spinAmount"
            ).value
        );

    if (
        !username ||
        !amount
    ) {
        return;
    }

    let users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];

    const user =
        users.find(
            u =>
                u.username === username
        );

    if (!user) {

        alert(
            "Kullanıcı bulunamadı."
        );

        return;
    }

    user.wheelSpins += amount;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert(
        "Çark hakkı eklendi."
    );
}

/* =========================
   LOG TABLE
========================= */

function renderLogs() {

    const table =
        document.getElementById(
            "logTable"
        );

    if (!table) return;

    const logs =
        JSON.parse(
            localStorage.getItem(
                "logs"
            )
        ) || [];

    table.innerHTML = "";

    logs.forEach(log => {

        table.innerHTML += `

        <tr>

            <td>${log.username}</td>

            <td>${log.action}</td>

            <td>${log.time}</td>

        </tr>

        `;
    });
}

/* =========================
   ADMIN TABS
========================= */

function openAdminTab(tabId) {

    document
        .querySelectorAll(
            ".admin-tab"
        )
        .forEach(tab => {

            tab.classList.remove(
                "active-tab"
            );
        });

    const tab =
        document.getElementById(
            tabId
        );

    if (tab) {

        tab.classList.add(
            "active-tab"
        );
    }
}

/* =========================
   USER SEARCH
========================= */

document.addEventListener(
    "input",
    function (e) {

        if (
            e.target.id !==
            "userSearch"
        ) {
            return;
        }

        const search =
            e.target.value
                .toLowerCase();

        const rows =
            document.querySelectorAll(
                "#userTable tr"
            );

        rows.forEach(row => {

            const text =
                row.innerText
                    .toLowerCase();

            row.style.display =
                text.includes(search)
                    ? ""
                    : "none";
        });
    }
);

/* =========================
   SESSION CHECK
========================= */

function checkSession() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

    if (!currentUser) {

        showPage("loginPage");

        return;
    }

    if (
        currentUser.role ===
        "admin"
    ) {

        loadAdminPanel();

        showPage("adminPage");

    } else {

        loadUserDashboard();

        showPage("dashboardPage");
    }
}

/* =========================
   START
========================= */

initializeDatabase();

checkSession();

console.log(
    "V2 PLATFORM LOADED"
);
