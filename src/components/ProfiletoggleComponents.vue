<template>
  <div class="profile-dropdown" style="z-index: 9999;">
    <div class="dropdown-trigger" @click="toggleProfileDropdown">
      <div class="profile-avatar" :style="{ backgroundImage: `url(${profile.image})` }"></div>
      <span class="span-profile-name">{{ profile.name }}</span>
      <i class="fa fa-caret-down"></i>
    </div>
    <div class="dropdown" :class="{ 'is-active': profileDropdownVisible }">
      <div class="dropdown-content">
        <!-- <div class="dropdown-item">
          <div class="profile-avatar-large" :style="{ backgroundImage: `url(${profile.image})` }"></div>
          <h3>{{ profile.name }}</h3>
          <p>Age: {{ profile.age }}</p>
          <p>Email: {{ profile.email }}</p>
          <p>Address: {{ profile.address }}</p>
        </div> -->
        <div class="dropdown-item">
          <ion-icon name="add-outline"></ion-icon>
          <button class="button is-primary" @click="editProfile"><span>Pilihan 1</span> </button>
        </div>
        <div class="dropdown-item">
          <ion-icon name="add-outline"></ion-icon>
          <button class="button is-danger" @click="logout"><span>Pilihan 2</span> </button>
        </div>
        <div class="dropdown-item">
          <ion-icon name="add-outline"></ion-icon>
          <button class="button is-danger" @click="logout"><span>Pilihan 3</span> </button>
        </div>
        <div class="dropdown-item">
          <ion-icon name="add-outline"></ion-icon>
          <button class="button is-danger" @click="logout"><span>Pilihan 4</span> </button>
        </div>
        <div class="dropdown-item">
          <ion-icon name="add-outline"></ion-icon>
          <button class="button is-danger" @click="logout"><span>Pilihan 5</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      profileDropdownVisible: false,
      isActive: false,
      profile: {
        name: 'Rio Alamsyah',
        age: 30,
        email: 'johndoe@example.com',
        address: '123 Main St, Anytown USA',
        image: 'https://picsum.photos/50/50'
      }
    }
  },
  methods: {
    toggleProfileDropdown() {
      this.profileDropdownVisible = !this.profileDropdownVisible
    },
    editProfile() {
      console.log('Editing profile...')
    },
    logout() {
      console.log('Logging out...')
    },
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.dropdown-item{
  display: inline-block;
  margin-left: 15px;
}
.profile-dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  top: 5px;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 0.5em;
}

.dropdown-trigger span {
  margin-right: 0.5em;
}

.dropdown-trigger i {
  margin-left: 0.5em;
}

.dropdown{
  opacity: 0;
  position: absolute;
  background-color: #7d3be0;
}

.dropdown.is-active { 
  top: 80px;
  left: -30px;
  border-radius: 10px;
  height: 150px;
  width: 140px;
  position: absolute;
  opacity: 1;
  right: 0;
}

.button{
  background-color: transparent;
  color: white;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

ion-icon{
  color: white;
  position: relative;
  top: 5px;
  width: 20px;
  height: 20px;
  left: -10px;
}

.span-profile-name{
  color: white;
}



</style>

