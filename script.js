// --- VARIABLES GLOBALES DEL CALENDARIO ORIGINAL ---
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// --- FUNCIÓN PARA SELECCIONAR FECHA ---
function selectDate(day, month, year) {
    const nacimientoInput = document.getElementById("nacimiento");
    if (nacimientoInput) {
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = (month + 1) < 10 ? '0' + (month + 1) : (month + 1);
        nacimientoInput.value = `${formattedDay}/${formattedMonth}/${year}`;
        
        const calendarPopup = document.getElementById("calendarPopup");
        if (calendarPopup) calendarPopup.style.display = "none";
    }
}

// --- FUNCIÓN PARA MOSTRAR/OCULTAR EL CALENDARIO ---
function toggleCalendar() {
    const calendarPopup = document.getElementById("calendarPopup");
    if (calendarPopup) {
        if (calendarPopup.style.display === "block") {
            calendarPopup.style.display = "none";
        } else {
            calendarPopup.style.display = "block";
            if (typeof renderCalendar === "function") {
                renderCalendar();
            } else {
                const calDays = document.getElementById("calDays");
                if (calDays && calDays.children.length === 0) {
                    let daysHTML = "";
                    for (let i = 1; i <= 31; i++) {
                        daysHTML += `<span onclick="selectDate(${i}, ${currentMonth}, ${currentYear})">${i}</span>`;
                    }
                    calDays.innerHTML = daysHTML;
                }
            }
        }
    }
}

// --- FUNCIÓN PARA VER / OCULTAR CONTRASEÑA (EL OJO) ---
function alternarPassword() {
    const campoPassword = document.getElementById("password");
    if (campoPassword) {
        if (campoPassword.type === "password") {
            campoPassword.type = "text";
        } else {
            campoPassword.type = "password";
        }
    }
}

// --- LÓGICA DE REGISTRO DE ALUMNO ---
function registrarAlumno(evento) {
    if (evento) evento.preventDefault(); // Evita bloqueos

    // Capturamos los datos que el alumno escribió en matricula.html
    let nombreAlumno = document.getElementById("nombre").value.trim();
    let apellidoAlumno = document.getElementById("apellido").value.trim();
    let correoAlumno = document.getElementById("correo").value.trim();
    let passwordAlumno = document.getElementById("password").value.trim(); 

    // Jalamos la lista de alumnos guardados en el navegador
    let listaAlumnos = JSON.parse(localStorage.getItem("alumnosMundus")) || [];

    // Creamos el nuevo usuario compatible con tu login
    let nuevoUsuario = { 
        nombre: nombreAlumno,
        apellido: apellidoAlumno,
        correo: correoAlumno, 
        pass: passwordAlumno, 
        nombreCompleto: nombreAlumno + " " + apellidoAlumno
    };

    listaAlumnos.push(nuevoUsuario);
    localStorage.setItem("alumnosMundus", JSON.stringify(listaAlumnos));

    // Traemos los modales de tu HTML
    const loadingBackdrop = document.getElementById("loadingBackdrop");
    const modalBackdrop = document.getElementById("modalBackdrop");

    // Activamos las clases visuales de tu CSS original
    if (loadingBackdrop) loadingBackdrop.classList.add("is-visible");
    
    setTimeout(() => {
        if (loadingBackdrop) loadingBackdrop.classList.remove("is-visible");
        if (modalBackdrop) modalBackdrop.classList.add("is-visible");
    }, 1500);
}

// Esperamos a que la página cargue por completo para configurar botones
document.addEventListener("DOMContentLoaded", function() {
    
    // Inicializar selectores de año en el calendario si existen
    const yearSelect = document.getElementById("yearSelect");
    if (yearSelect && yearSelect.children.length === 0) {
        let yearsHTML = "";
        for (let i = 2015; i >= 1950; i--) {
            yearsHTML += `<option value="${i}">${i}</option>`;
        }
        yearSelect.innerHTML = yearsHTML;
    }

    // Configuración para el botón "Continuar al acceso" de tu modal
    const btnContinuar = document.getElementById("continuarBtn");
    if (btnContinuar) {
        btnContinuar.addEventListener("click", function() {
            window.location.href = "login.html"; 
        });
    }

    // --- MOSTRAR EL NOMBRE DEL VOUCHER SELECCIONADO ---
    const inputVoucher = document.getElementById("voucher");
    const textoVoucher = document.getElementById("voucherName");

    if (inputVoucher && textoVoucher) {
        inputVoucher.addEventListener("change", function() {
            if (inputVoucher.files.length > 0) {
                textoVoucher.innerText = "✓ Archivo listo: " + inputVoucher.files[0].name;
                textoVoucher.style.color = "#28A745"; 
                textoVoucher.style.marginTop = "10px";
                textoVoucher.style.fontWeight = "600";
            } else {
                textoVoucher.innerText = "";
            }
        });
    }
});

// Cerrar el calendario si hacen clic afuera de la cajita
document.addEventListener("click", function(event) {
    const calendarPopup = document.getElementById("calendarPopup");
    const nacimientoInput = document.getElementById("nacimiento");
    
    if (calendarPopup && nacimientoInput) {
        if (!calendarPopup.contains(event.target) && event.target !== nacimientoInput) {
            calendarPopup.style.display = "none";
        }
    }
});
