<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
    <header :class="{ 'dark-mode': darkMode }">
      <div class="container" >
          <div class="container-profile" :class="{ active: isActive }" style="display: flex;z-index: 2;">
            <a href="#" class="notification-button">
              <ion-icon name="notifications-outline" class="icon-notive"></ion-icon>
              <p class="number-notification">{{ userCount }}</p>
            </a>
              <ProfileToggle/>
            </div>
            <div class="top-container" :class="{ active: isActive }">
            <div class="top-navigation" :class="{'dark-mode': darkMode}">  
              <div @click="toggleActive" class="toggle" :class="{ active: isActive }">
                <ion-icon name="menu-outline" class="open"></ion-icon>
              </div>
              <!-- <div class="search-input">
                <ion-icon name="notifications-outline" class="icon-notive"></ion-icon>
                <input type="search" name="" id="search" class="search-input" placeholder="Search Here"  :class="{ active: isActive }">
            </div> -->
           </div> 
        </div>
        <div class="side-top-navigation" :class="{ active: isActive , 'dark-mode': darkMode }">
            <!-- <div class="logo">
              <a href="#">CRM</a>
            </div> -->
            <li class="list-title" :class="{ active: isActive }">
                <a href="../Profile/index.html">
                    <span class="icon" style="margin-right: 20px;"><ion-icon style="color:white;" name="logo-google-playstore"></ion-icon></span>
                    <span class="title" style="position:absolute; top:-5px;">CRM</span>
                </a>
            </li>
          </div>
        <div class="navbar-and-content">
          <div class="navigation" :class="{ active: isActive, 'dark-mode': darkMode }">
            <ul>
                <li class="list" :class="{ active: currentPage === 'dashboard' }">
                    <b :class="{'dark-mode': darkMode}"></b>
                    <b :class="{'dark-mode': darkMode}"></b>
                    <a :href="Dashboard" @click.native="activeLink = 'dashboard'">
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li class="list" :class="{ active: currentPage === 'create' }">
                    <b :class="{'dark-mode': darkMode}"></b>
                    <b :class="{'dark-mode': darkMode}"></b>
                    <a :href="Create" @click.native="activeLink = 'create'">
                      <span class="icon"><ion-icon name="add-outline"></ion-icon></span>
                        <span class="title">Create</span>
                    </a>
                </li>
                <li class="list" :class="{ active: currentPage === 'data' }">
                  <b :class="{'dark-mode': darkMode}"></b>
                  <b :class="{'dark-mode': darkMode}"></b>
                    <a :href="Data" @click.native="activeLink = 'data'">
                        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span class="title">Data</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span class="title" @click.prevent="logout">SignOut</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <button @click="toggleDarkMode">
                        <span class="icon"> <ion-icon :name="darkMode ? 'sunny' : 'moon'"></ion-icon></span>
                        <span class="title" v-text="darkMode ? 'Light' : 'Dark'"></span>
                    </button>
                </li>
            </ul>
          </div>
      </div>
      </div>
    </header>
  
    <RouterView />
  </template>
  
  <style scoped>
  
  .navigation.dark-mode{
      background-color: #3c3c3c;
  }
  
  .side-top-navigation.dark-mode{
      background-color: #3c3c3c;
  }
  
  
  .navigation ul li b.dark-mode:nth-child(1)::before{
      background-color: #3c3c3c;
  }

  
  .navigation ul li b.dark-mode:nth-child(2)::before{
      background-color: #3c3c3c;
  }
  
  .header-body.dark-mode{
      background-color: #3c3c3c;
  }

  .second-navigation.dark-mode{
    background-color: #3c3c3c;
  }
  .body-data.dark-mode{
    background-color: #3c3c3c;
  }

  .card-desc.dark-mode{
    background-color: #3c3c3c;
  }

  .body-side-content.dark-mode{
    background-color: #3c3c3c;
  }

  .list-title{
    left: 100px;
    transition: left 0.5s;
  }

  .list-title.active{
    left: 40px;
  }
  </style>
  <script lang="ts">
  import ProfileToggle from './ProfiletoggleComponents.vue';
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import router from '@/router' // import Vue Router

  export default defineComponent({
    props: ['currentPage'],
    data() {
      return {
        isActive: false,
        darkMode: false,
        Dashboard: '/',
        Create: '/Create',
        activeLink: '',
        Data: '/Data',
        userCount: 0 ,
        activeTab: 'create'
      };
    },
    async mounted() {
    const response = await axios.get('http://localhost:9000/api/v1/cms/users');
    this.userCount = response.data.data.length; // mengubah nilai variabel userCount menjadi panjang data dari response
    console.log(response.data.data.length); // menampilkan hasil di console (opsional)
  },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
      },
      toggleActive() {
        this.isActive = !this.isActive;
        this.$emit('button-clicked', true);
      },
      logout() {
        localStorage.removeItem('token')
        // code to navigate to login page
        router.push('/') // redirect to login page
      }

    },
    components: {
      ProfileToggle,
    },
  });
  </script>
  