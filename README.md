# XIONCO Shop Admin Dashboard

## Developer
Annisa Ardelia Setiawan

## Description
<b>This project is a web-based admin system for <ins>XIONCO</ins></b>

Your sleek, dark-mode control hub for managing a fictional store! 🚀 

This web-based system lets admins effortlessly:

* Browse a beautiful product catalog with images, prices, and stock levels at a glance.
* Record new purchases and watch stock update automatically.
* Cancel orders and restore stock with a single click.
* Track purchase status with colorful badges — `processed`, `delivered`, or `canceled`.
* Undo actions when mistakes happen .

## Features

### 1. Products 📦

* Stunning product list with images, prices, and stock info.
* Click any row to dive into full product details — it’s all right there!

### 2. Purchases 🛍️

* Quickly add new purchases and let the system handle stock updates.
* Keep tabs on each order’s journey with clear statuses:

  * `processed` → ready to deliver
  * `delivered` → mark as received or undo delivery
  * `canceled` → undo cancel if needed
* Smart action buttons appear exactly when you need them.
* Visual cues with images and badges make tracking orders a breeze.

### 3. User Interface (UI) 📊

* Elegant dark mode that’s easy on the eyes. 🌙
* Hero dashboard with a big, welcoming image and clean layout.
* Responsive tables and forms that look great on any screen.
* Minimal, modern design that makes managing your store satisfying.

---

# Tech Stack

## Backend
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)

## Frontend
![EJS](https://img.shields.io/badge/EJS-B4CA65?logo=ejs&logoColor=000) ![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=fff)

## Database
![NeonDB](https://img.shields.io/badge/NeonDB-555?logo=naver)

## Languages
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000) ![HTML](https://img.shields.io/badge/HTML-262729?logo=htmx&logoColor=white)

---

# How to Use - User' Guide
### Open the right terminal folder
```
cd pretest1_annisa
```
### Clone the repository
```
git clone https://github.com/annisa-ardelia/XIONCO_pretest1
```
### Install dependencies
```
npm install
```
### Create .env file in root folder
<img width="152" height="300" alt="image" src="https://github.com/user-attachments/assets/33681241-6451-4541-8ff7-810b972673ac" />

### Fill the .env file with
```env
DATABASE_URL=your-postgresql-url://
PORT=3000
```
<img width="484" height="90" alt="image" src="https://github.com/user-attachments/assets/f4b993b3-065c-413f-b075-c3f212850616" />

### Get your database url using NeonDB
#### Signin to NeonDB
Go to `https://neon.com/` and signin

#### Create your first project (you don't need to if you already have ongoing project)
<img width="1893" height="869" alt="image" src="https://github.com/user-attachments/assets/33f083fc-390d-43c6-a2a8-0f52e6160c6d" />

Name the project whatever you want and **choose `AWS Asia Pacific 1 (Singapore)` as the region** since it's the closest to Indonesia. Click create project
#### Click connect at the upper right section at dashboard
<img width="1894" height="871" alt="image" src="https://github.com/user-attachments/assets/51a1fe7e-a4ad-43a1-8e28-518affa43665" />

#### Copy the string to your .env file
<img width="1098" height="801" alt="image" src="https://github.com/user-attachments/assets/d883ad16-96a6-4d41-b5cd-44b3a4dfb58b" />

<br> First click show password, copy the green-coded string and paste it to .env file so that it will looked like this

<img width="1237" height="39" alt="image" src="https://github.com/user-attachments/assets/c2a4a020-e24d-4339-acd8-2d68f20ba1c8" />

### Run the project
```
node app.js
```
---

# Project Structure
## Home Page
<img width="1919" height="871" alt="image" src="https://github.com/user-attachments/assets/8b21ea02-6c83-4ea1-a1fb-c7438ac5a6dc" />

## Product Stock Page
<img width="1919" height="838" alt="image" src="https://github.com/user-attachments/assets/56d596c7-53e3-4c79-adaf-1f3d67ae8e5b" />

## Purchase Log Page
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/47e3bb1f-47cd-42be-96f3-3cf1987b17dd" />

## Product Details Page
<img width="1919" height="813" alt="image" src="https://github.com/user-attachments/assets/abc88ad2-75d9-4947-a5f3-93d104bd7587" />

## Purchase Details Page
<img width="1919" height="851" alt="image" src="https://github.com/user-attachments/assets/cc1fdc73-40b5-4fb0-9e5d-916f9615ab88" />

## Input Purchase Page
<img width="1898" height="874" alt="image" src="https://github.com/user-attachments/assets/5de72212-645e-41ff-9126-944256ba1011" />
