# Portfolio — Migue

Sitio estático sin build ni dependencias: se sube tal cual a GitHub Pages.

```
portfolio/
├── index.html        ← estructura
├── css/styles.css    ← estilos
├── js/script.js      ← comportamiento
├── CNAME             ← tu dominio
└── README.md
```

Las rutas son relativas, así que funciona igual en la raíz del repo o en un subdirectorio de GitHub Pages.

---

## 1. Personalizar (antes de subir)

Abrí `index.html` y editá:

- **Email:** buscá `TU-EMAIL@ejemplo.com` y ponelo real.
- **LinkedIn:** buscá el botón `LinkedIn` y reemplazá el `href="#"` por tu URL.
- **Proyectos:** cada tarjeta es un bloque `<article class="card">`. Para sumar uno, duplicá un bloque y cambiá ID, estado, texto, tags y links. La tarjeta punteada (`ghost`) es solo una guía: podés borrarla.
- **Nombre / textos:** editá libremente los títulos y descripciones.

> Nota: dejé los enlaces de "Código" apuntando a `github.com/miguepmk`. Cuando tengas los repos públicos de cada proyecto, cambiá cada `href` por el repo correspondiente.

---

## 2. Subir a GitHub

Podés usar el repo especial de usuario (`miguepmk.github.io`, sirve en la raíz) o un repo común (ej. `portfolio`). Con dominio propio da lo mismo.

```bash
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/miguepmk/portfolio.git
git push -u origin main
```

Luego, en el repo → **Settings → Pages**:
- **Source:** `Deploy from a branch`
- **Branch:** `main` / `/root` → Save

En un minuto queda online en `https://miguepmk.github.io/portfolio/`.

---

## 3. Dominio propio (comprado en DonWeb)

### 3.1 Decir el dominio en GitHub
Settings → Pages → **Custom domain**: escribí tu dominio (ej. `tudominio.com.ar`) y Save.
Esto crea/actualiza el archivo `CNAME` del repo (ya incluí uno con un placeholder; reemplazalo por tu dominio real o dejá que GitHub lo sobrescriba).

### 3.2 Configurar la Zona DNS en DonWeb
Área de Cliente → **Mis servicios → Dominios** → elegí el dominio → **Gestionar** → **Nameservers y Zona DNS**.
(Si no existe todavía, tocá **Crear zona DNS**.)

**Dominio raíz (apex, sin www) → 4 registros A:**

| Tipo | Nombre        | Contenido         | TTL   |
|------|---------------|-------------------|-------|
| A    | tudominio.com.ar | 185.199.108.153 | 14400 |
| A    | tudominio.com.ar | 185.199.109.153 | 14400 |
| A    | tudominio.com.ar | 185.199.110.153 | 14400 |
| A    | tudominio.com.ar | 185.199.111.153 | 14400 |

**Subdominio www → 1 registro CNAME:**

| Tipo  | Nombre | Contenido            | TTL   |
|-------|--------|----------------------|-------|
| CNAME | www    | miguepmk.github.io.  | 14400 |

(Opcional, IPv6: 4 registros **AAAA** en el apex apuntando a `2606:50c0:8000::153`, `...8001::153`, `...8002::153`, `...8003::153`.)

> Si DonWeb ya tenía un registro A o AAAA por defecto en el apex, editalo/eliminá el viejo para que no choque con estos.

### 3.3 Esperar y activar HTTPS
La propagación tarda de minutos a unas horas. Cuando el dominio resuelva, volvé a Settings → Pages y tildá **Enforce HTTPS** (el certificado lo emite GitHub gratis).

---

## Checklist

- [ ] Email y LinkedIn reales en `index.html`
- [ ] Links de "Código" apuntando a los repos correctos
- [ ] Repo pusheado y Pages activado
- [ ] Custom domain cargado en GitHub (genera el `CNAME`)
- [ ] 4 registros A (+ CNAME de www) en la Zona DNS de DonWeb
- [ ] Enforce HTTPS tildado

Datos de GitHub Pages verificados en la documentación oficial (docs.github.com). Panel de DonWeb según soporte.donweb.com.
