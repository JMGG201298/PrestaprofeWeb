<template>
    <div>
      <v-app-bar
        color="#006a82"
        dark
        flat
        height="58px"
        app
        clipped-left
      >
        <v-toolbar-title>Prestaprofe</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-flex">
            
                <v-icon color="#f0d042" size="40" left>
                  mdi-home-account
                </v-icon>
                <div>
                    <div style="font-size: 1.09rem" class="font-weight-bold">{{user.name+" "+user.last_name}}</div>
                    <div style="font-size: 0.67rem">{{user.role}}</div>
                </div>
            
        </div>


      </v-app-bar>
      <v-navigation-drawer
          color="#002b32"
          dark
          permanent
          app
          height="100%"
          clipped
        >

          <v-list
            nav
            dense
          >
            <v-list-item link :to="{name: 'Inicio'}">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Caja'}">
              <v-list-item-icon>
                <v-icon>mdi-piggy-bank</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Caja</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Préstamos'}">
              <v-list-item-icon>
                <v-icon>mdi-cash-register</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Préstamos</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Clientes'}">
              <v-list-item-icon>
                <v-icon>mdi-badge-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Clientes</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Cobros'}">
              <v-list-item-icon>
                <v-icon>mdi-hand-coin</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cobros</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Atrasos'}">
              <v-list-item-icon>
                <v-icon>mdi-history</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Atrasos</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Reportes'}">
              <v-list-item-icon>
                <v-icon>mdi-file-chart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Reportes</v-list-item-title>
            </v-list-item>
            <v-list-item active-class="active-yellow" link :to="{name: 'Usuarios'}">
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logOut" >
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Salir</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-app-bar
            color="#212121"
            dark
            flat
            height="51px">
              <v-icon color="#f0d042" size="28" left>mdi-home</v-icon>
              <div class="font-weight-bold">{{$route.name.toUpperCase()}}</div>
            </v-app-bar>
            <v-sheet
              color="#006a82"
              elevation="0"
              height="27vh"
              width="100%">
            <router-view></router-view>
            </v-sheet>
        </v-main>
        <InfoUser></InfoUser>
    </div>
</template>

<script>
import InfoUser from '../components/InfoUser.vue';
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState({
      user: state=>state.loginModule.user
    })
  },
  methods:{
    async logOut(){
      try {
        axios.post("/logout");
        this.$store.dispatch("logout");
      } catch (error) {
        this.$store.dispatch("logout");
      }
      this.$router.push({name: 'login'});
    }
  },
  components:{
    InfoUser
  }
}
</script>

<style>
.active-yellow{
    text-decoration: none !important;
}

.active-yellow > div{
    color: #f0d042 !important;
    font-weight: bolder !important;
}
.v-list-item{
    text-decoration: none !important;
}
</style>
