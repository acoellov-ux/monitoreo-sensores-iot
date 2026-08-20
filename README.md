# 🚗 UTEQ Smart Parking - Monitoreo Telemático

Sistema de monitoreo telemático en tiempo real para el parqueadero inteligente del campus de la **Universidad Técnica Estatal de Quevedo (UTEQ)**.

---

## 📌 Descripción del Proyecto

La aplicación simula y gestiona la telemetría enviada por **80 sensores ultrasónicos** organizados en una matriz de **4 columnas × 20 filas**. Permite visualizar el estado de disponibilidad de cada plaza de estacionamiento, calcular métricas globales en tiempo real e inspeccionar parámetros telemáticos como distancia detectada, coordenadas geográficas y estampas de tiempo.

---

## 📐 Especificaciones Técnicas y Dimensionamiento

* **Superficie Total:** $2,405.74 \text{ m}^2$ ($91.37 \text{ m} \times 26.34 \text{ m}$)
* **Distribución:** 4 columnas (A, B, C, D) × 20 espacios = 80 celdas telemáticas.
* **Área por Celda:** $30.08 \text{ m}^2$ ($6.58 \text{ m} \times 4.57 \text{ m}$), contemplando espacio vehicular ($12.50 \text{ m}^2$) y vías internas de circulación ($17.58 \text{ m}^2$).
* **Ubicación (Bounding Box UTEQ):**
  * **Norte:** -1.012261 | **Sur:** -1.012570
  * **Oeste:** -79.468299 | **Este:** -79.467462

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React 18, Vite.
* **Estructura de Datos:** JSON (compatible con Firebase Realtime Database).
* **Estilos:** CSS3 / Inline Styles interactivos.

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/acoellov-ux/estacionamiento-inteligente-uteq.git](https://github.com/acoellov-ux/estacionamiento-inteligente-uteq.git)
   cd estacionamiento-inteligente-uteq
