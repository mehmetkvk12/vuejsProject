<template>
  <!-- Sol Kısım -->
    

    <div class="tum">
        
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
                <router-link to="/galleryPage" class="solMenuLink">
                    <i class="icon">🖼️</i>
                    Gallery
                </router-link>
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
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'calendarPage',
    setup() {
      const router = useRouter();
  
      const takvim = () => {
        router.push({ name: 'calendarPage' });
      };
  
      return { takvim };
    }
  });
  </script>


<style scoped>

.tum{
    min-width: 100%;
    height: 100%;
    background-color: gray;
}
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
</style>