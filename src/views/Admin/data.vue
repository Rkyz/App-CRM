<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Navbar :current-page="'data'" @button-clicked="toggleActive"/>
    <div class="details" :class="{ 'active': isActive }">
        <div class="row">
            <div class="col-md-12">
                <div class="main-card mb-3 card">
                    <div class="card-header">Recent Data
                        <div class="btn-actions-pane-right">
                            <div role="group" class="btn-group-sm btn-group">
                                <button class="active btn btn-focus" style="z-index: 0;">Last Week</button>
                                <button class="btn btn-focus">All Month</button>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                            <tr >
                                <th class="text-center">No</th>
                                <th class="pl-4">Name & Email</th>
                                <th class="text-center">Alamat</th>
                                <th class="text-center">No Telephone</th>
                                <th class="text-center">Tanggal Lahir</th>
                                <th class="text-center">Jenis Kelamin</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Action</th>

                            </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(user, index) in filteredUsers" :key="user._id">
                                <td class="text-center text-muted">{{ index + 1 }}</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">{{ user.name }}</div>
                                                <div class="widget-subheading opacity-7">{{ user.email }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{{ user.alamat }}</td>
                                <td class="text-center">{{ user.nomer_hp }}</td>
                                <td class="text-center">{{ user.tanggal_lahir }}</td>
                                <td class="text-center">{{ user.jenis_kelamin }}</td>
                                <td class="text-center">
                                    <div class="badge badge-primary">Success</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm mr-2" @click="deleteUser(user._id)">Delete</button>
                                    <router-link class="btn btn-primary " :to="{ name: 'edit', params: { id: user._id } }">Edit</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-block text-center card-footer">
                      <button style="color: white;"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from "../../components/NavigationComponents.vue";
import Swal from 'sweetalert2';



interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  alamat: string;
  nomer_hp: number;
  tanggal_lahir: string;
  jenis_kelamin: string;
  image: string;
}

export default defineComponent({
  data() {
    return {
      users: [] as User[],
      filterText: "",
      isActive: false,
      userCount: 0,
      views: 0,
      searchInput: '',
      searchResults: []
    };
  },

  async mounted() {
    await this.getData();
    const response = await axios.get('http://localhost:9000/api/v1/cms/users');
    this.userCount = response.data.data.length; // mengubah nilai variabel userCount menjadi panjang data dari response
    console.log(response.data.data.length); // menampilkan hasil di console (opsional)
    this.views = Number(localStorage.getItem('views')) || 0; // mengambil jumlah views dari local storage, default 0 jika belum ada
    this.views++; // menambahkan jumlah views dengan 1 setiap kali halaman dimuat
    console.log(`Total Views: ${this.views}`); // menampilkan jumlah views pada console

  },

  methods: {
    async performSearch() {
      try {
        const response = await fetch(`http://localhost:9000/api/v1/cms/users${this.searchInput}`)
        const data = await response.json()
        this.searchResults = data.results
      } catch (error) {
        console.error(error)
      }
    },
    async getData() {
      try {
        const response = await axios.get('http://localhost:9000/api/v1/cms/users');
        this.users = response.data.data.map((user: User, index: number) => ({
          ...user,
          _id: user._id || index + 1
        }));
        console.log(response.data.data.length);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(userId: string) {
  try {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (confirmed.isConfirmed) {
      const response = await axios.delete(`http://localhost:9000/api/v1/cms/users/${userId}`);
      this.users = this.users.filter(user => user._id !== userId);
      console.log(response.data.data.name);
      await Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then(() => {
        window.location.reload();
      });
    }
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
},




    toggleActive() {
      this.isActive = !this.isActive;
    },
  },

  computed:{
    filteredUsers(): User[] {
      return this.users.filter((user: User) =>
        user.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
  },
  components:{
    Navbar
  }
});
</script>

<style scoped>
.details{
    position: relative;
    width: 84%;
    padding: 20px;
    display: grid;
    grid-gap: 30px;
    top: 100px;
    left: 300px;
    height: 300px;
    transition: all 0.5s;
}

.details.active{
    left: 75px;
    width: 95%;
}
</style>
