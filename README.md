# MiniInventario

CRUD de categorías con **Spring Boot** + **Angular 21**.

## Estructura

```
MiniInventario/
├── backend/          # Spring Boot 4.0.5 + JPA + PostgreSQL/H2
└── frontend/         # Angular 21.2 (standalone + zoneless)
```

## Requisitos

- **Java 17+**
- **Node.js 18+**
- **PostgreSQL** (opcional para desarrollo, se puede usar H2 en memoria)

## Arranque rápido (desarrollo)

### Backend (con H2 en memoria, sin PostgreSQL)

```bash
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

El backend corre en `http://localhost:8080`.

### Frontend

```bash
cd frontend
npm install
npm start
```

El frontend corre en `http://localhost:4200`.

## Base de datos (producción)

El perfil por defecto usa PostgreSQL. Configurar variables de entorno:

```bash
DB_USER=admin
DB_PASSWORD=admin
DB_URL=jdbc:postgresql://localhost:5173/testdb
```

Luego iniciar normalmente:

```bash
cd backend
mvn spring-boot:run
```

## Endpoints

### Categorías

| Método   | URL                                      |
|----------|------------------------------------------|
| `GET`    | `/api/v1/categorias/categoria`           |
| `GET`    | `/api/v1/categorias/categoria/{id}`      |
| `POST`   | `/api/v1/categorias/categoria`           |
| `PUT`    | `/api/v1/categorias/categoria/{id}`      |
| `DELETE` | `/api/v1/categorias/categoria/{id}`      |

### Swagger UI

`http://localhost:8080/documentacion/swagger-ui.html`

## Licencia

Uso académico — IPN.
