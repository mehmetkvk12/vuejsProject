<template>
   
    <div class="tam">
        <div class="tamorta">
            <img src="../assets/logo.png" title="vuejs" class="logo">

            <form ><p></p>
                <input type="text" name="kadi" id="kadi" placeholder="Kullanıcı Adı"><p></p>

                <input type="password" name="" id="sifre" placeholder="Şifre"><p></p>

                <label><input type="checkbox" name="beniHatirla" id="beniHatirla">Beni Hatırla</label>
            
                <a href="#" class="sunuttum">Şifreni mi Unuttun?</a><p></p>

                <button @click="login" class="girisyap">Giriş Yap</button><p></p>
              </form>
                <table width="90%" align="center">
                    <tr>
                        <td width="40%"><hr class="cizgisol"></td>
                        <td width="20%">ya da</td>
                        <td width="40%"><hr class="cizgisag" ></td>
                    </tr>
                </table>
                  <p></p>
                <input type="button" class="google" value="Google ile Giriş Yap"><p></p>
                <input type="button" class="facebook" value="FaceBook ile Giriş Yap"><p></p>

                <h4 style="color: gray;">Hesabın yok mu? <a href="#" style="color: gray;">Kayıt Ol</a></h4>
                
                
            
            
          
        </div>
        
    </div>

  
</template>



  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'girisPage',
    setup() {
      const router = useRouter();
  
      const login = () => {
        router.push({ name: 'dashboardPage' });
      };
  
      return { login };
    }
  });
  </script>




<style scoped>

body{
    background-color: darkslategray;
}
.tam{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 768px;
    background-color: darkslategray;
    margin-top: 55px;
    
}
.tamorta{
text-align: center;
    width: 375px;
    height: 550px;
    background-color: white;
    border-radius: 7px;
}
.logo{
    width: 100px;
    padding-top: 20px;
}
#kadi, #sifre {
    width: 250px;
    height: 35px;
    font-size: 17px;
    border: 1px solid black;
    border-radius: 7px;
    padding-left: 8px;
    color:forestgreen;
}
.sunuttum{
margin-left: 27px;
color: black;
}
.girisyap{
    width: 250px;
    height: 35px;
    border-radius: 9px;
    font-size: 20px;
    border: 0 solid ;
    background-color: darkslategrey;
}
.google{
    width: 180px;
    height: 25px;
    background-color: red;
    font-size: 15px;
    border: 0 solid ;
    border-radius: 6px;
}
.facebook{
    width: 180px;
    height: 25px;
    background-color:dodgerblue;
    font-size: 15px;
    border: 0 solid ;
    border-radius: 6px;
}

</style>
  

  