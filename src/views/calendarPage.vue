<template>
  <!-- Sol Kısım -->
    

    <div class="tum">

        <!-- Sol Menü Kısmı Burdan Başlıyor -->

        <div class="sol">
          <div class="logo">
            
            <a href="\" style="display: flex; color: black; text-decoration: none; align-items: center;" ><img src="../assets/logo.png">
            <h2>Pragmatic</h2></a>
          </div>
            <div class="menuDiv">
            <ul class="menu">
              <li class="solmenu">
              <router-link to="/dashboardPage" class="solMenuLink">
                <i class="icon"></i>
                DashBoard
              </router-link>
                <ul class="altmenu">
                    <li><a href ="#" class="solAltMenuLink" >Analytical</a></li>
                    <li><a href ="#" class="solAltMenuLink" >eCommerce</a></li>
                    <li><a href ="#" class="solAltMenuLink" >Crypto</a></li>
                </ul>
              </li>
              <li class="solmenu">
                <router-link to="/calendarPage" class="solMenuLink">
                <i class="icon"></i>
                Calendar</router-link>
              
              </li>
              <li class="solmenu">
                <a href="#" class="solMenuLink">
                <i class="icon"></i>
                Contacts
              </a>
              </li>
              <li class="solmenu">
                <a href="#" class="solMenuLink">
                    <i class="icon">🖼️</i>
                    Gallery
                </a>
              </li>
              <li class="solmenu">
                <a href="#" class="solMenuLink">
                    <i class="icon">📇</i>
                    Cards
                </a>
                </li>
              <li class="solmenu">
                <a href="#" class="solMenuLink">
                    <i class="icon">✉️</i>
                    Mail
                </a>
              </li>
              <li class="solmenu">
                <a href="#" class="solMenuLink">
                    <i class="icon">🛒</i>
                    eCommerce
                </a>
                <ul class="altmenu">
                    <li><a href ="#" class="solAltMenuLink" >Products</a></li>
                    <li><a href ="#" class="solAltMenuLink" >Orders</a></li>
                </ul>
              </li>
      </ul></div>
      <div class="menuDiv">
      <ul class="menu">
              <h3>User interface</h3>
              <li class="solmenu">
                
                <a href="#" class="solMenuLink">
                        <i class="icon">📐</i>
                        Layout
                    </a>
                    <ul class="altmenu">
                        <li><a href ="#" class="solAltMenuLink" >Grid</a></li>
                        <li><a href ="#" class="solAltMenuLink" >Flex</a></li>
                    </ul>
              </li>
              <li class="solmenu">
                <a href="#" class="solMenuLink">
                        <i class="icon">🎨</i>
                        Themes
                    </a>
              </li>
              <li class="solmenu">
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Multi level menu
                </a>
              </li>
              <li class="solmenu">
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Icons
                </a>
              </li>
              <li class="solmenu">
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Multi Language</a>
              </li>
              <li class="solmenu">
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Typography</a>
              </li>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Helper Classes</a>
              </li>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>Element</a>
              </li>
    </ul></div>
    <div class="menuDiv">
    <ul class="menu">
              <h3>Components</h3>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Tables</a>
              </li>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Maps</a>
              </li>
              <li class="solmenu">
               
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Editors</a>
              </li>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Charts</a>
              </li>
    </ul></div>
    <div class="menuDiv">
    <ul class="menu">
              <h3>Pages</h3>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Profile</a>
              </li>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Authentication</a>
              </li>
              <li class="solmenu">
                
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  Invoice</a>
              </li>
              <li class="solmenu">
                <a href ="#" class="solMenuLink">
                  <i class="icon"></i>
                  404</a>
              </li>
            </ul>
            </div>
        </div>
<!-- Sol Menü Kısmı Burada Bitiyor -->


<!-- Orta Kısım Buraya -->
<div class="orta">
  <div class="orta">
    <h3>Orta Kısım Buradaa</h3><br>
  </div>
  <div>
    <div class="calendar-grid">
    <div
      v-for="month in 12"
      :key="month"
      class="calendar-box"
    >
      <h3>{{ getMonthName(month - 1) }}</h3>
      <div class="calendar-days">
        <div class="day" v-for="day in getDaysInMonth(2025, month - 1)" :key="day">
          {{ day }}
        </div>
      </div>
    </div>
  </div>
  </div>
<br>

</div>
<!-- Orta Kısım Burada Bitiyor -->


    </div>
  </template>
  <script lang="ts" setup>
const getMonthName = (monthIndex: number): string => {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ]
  return months[monthIndex]
}

const getDaysInMonth = (year: number, month: number): number[] => {
  const days = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: days }, (_, i) => i + 1)
}
</script>
<style scoped>

.tum{
  display: flex;
    min-width: 100%;
    height: 100%;
    background-color: gray;
}

/* Sol Menü Style Başlangıç */
.sol{
  width: 260px;
  margin: 0;
  padding: 10px 20px;
  background-color: #f5f6fa;
  font-family: sans-serif;
}
.solmenu{
  margin-bottom: 10px;
}
.menu{
  list-style: none;
  padding: 0;
  margin: 0;
}
.logo{
  
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.logo img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.logo h2{
  font-size: 18px;
  color: #333;
  margin: 0;
}
.solMenuLink{
  display: flex;
  align-items: center;
  padding: 10px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

}
.solAltMenuLink{
  text-decoration: none;
  align-items: center;
  padding-left: 17px;
  color: gray;
}
.solMenuLink:hover{
  background-color: #e9ecef;
}
.icon {
  margin-right: 10px;
}
.altmenu{
  list-style: none;
  padding-left: 20px;
  display: none;
}
 .solmenu:hover .altmenu {
  display:block;
} 
.menuDiv{
  margin-top: 30px;
}
.menuDiv h3{
  color: #6c757d;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding-left: 10px;
}

/* Sol Menu Style Bitiş */

/* Orta Style Başlangıç */

.orta{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items:baseline;
  background-color: white;
}



.calendar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
}

.calendar-box {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
}

.calendar-box h3 {
  text-align: center;
  margin-bottom: 10px;
}

.calendar-days {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
}

.day {
  width: 28px;
  height: 28px;
  background-color: #f0f0f0;
  text-align: center;
  line-height: 28px;
  border-radius: 4px;
  font-size: 12px;
}
/* Orta Style Bitiş */
</style>