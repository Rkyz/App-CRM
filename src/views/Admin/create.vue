<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Navbar :current-page="'create'" @button-clicked="toggleActive"/>

  <div class="create" :class="{ 'active': isActive }">
    <div class="col-md-12 col-lg-14">
      <div class="mb-3 card">
          <div class="card-header-tab card-header">
              <div class="card-header-title">
                  <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                  Create Data
              </div>
          </div>
          <div class="tab-content">
              <div class="tab-pane fade active show" id="tab-eg-55">
                  <div class="pt-2 card-body">
                      <div class="row">
                        <form action="" class="form-all" :class="{ active: isActive }" @submit.prevent="submitForm">
                            <input type="text" placeholder="Name" class="first" id="name" v-model="newUser.name" required>
                            <input type="email" placeholder="Email" id="email" v-model="newUser.email" required>
                            <input type="text" class="alamat" placeholder="Alamat" id="alamat" v-model="newUser.alamat" required>
                            <input type="password" placeholder="Password" id="password" v-model="newUser.password" required>
                            <input type="number" placeholder="Number" id="nomer_hp" v-model="newUser.nomer_hp" required>
                            <input type="date" name="" id="date" v-model="newUser.tanggal_lahir" required>
                            <div>
                              <select class="select" id="jenis_kelamin" v-model="newUser.jenis_kelamin" required placeholder="test" style="padding: 0 0 0 15px; color: grey;">
                                <option value="" style="display: none;">Select Your Option</option>
                                <option value="Laki - Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                              </select>
                            </div>
                            <input type="file" id="foto" @change="handleFileChange"  style="color: grey; "/>
                          <div class="d-flex justify-content-start pt-3">
                            <button type="submit" class="btn btn-success  btn-lg "
                           style="background-color:hsl(210, 100%, 50%);">test</button>
                      </div>
                  </form>
                     <div class="img">
                      <img v-if="gambarUrl" :src="gambarUrl" alt="Preview Image" class="img-gambar" style="width: 400px"/>
                     </div>
                      </div>
                  </div>
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

// file A.js

export default defineComponent({
  data() {
    return {
      showModal: false,
      isActive: false,
      users: [] as User[],
      filterText: "",
      newUser: {
        name: "",
        email: "",
        password: "",
        alamat: "",
        nomer_hp: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        gambar: "",
        image: "",
      },
      items: [], // data tabel
      pageSize: 10, // ukuran halaman
      currentPage: 1, // halaman saat ini
      gambarUrl: "",
      showAlert: false,
      alertType: "",
      alertMessage: ""
    };
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    toggleKu() {
      this.isActive = !this.isActive;
    },
    toggleActive() {
      this.isActive = !this.isActive;
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

    async createUser(newUser: Omit<User, '_id'>, imageId: string) {
  try {
    const response = await axios.post(
      "http://localhost:9000/api/v1/cms/users",
      {
        ...newUser,
        image: imageId,
      }
    );
    console.log('User created:', response.data.data);
    // Menampilkan notifikasi dengan Toastr
    console.log('User berhasil ditambahkan!');
  } catch (error) {
    console.error("Failed to create user:", error);
  }
},



    async deleteUser(userId: string) {
      try {
        const response = await axios.delete(`http://localhost:9000/api/v1/cms/users/${userId}`);
        this.users = this.users.filter(user => user._id !== userId);
        console.log(response.data)
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
      window.location.reload();
    },


    handleFileChange(event: { target: { files: any[]; }; }) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.newUser.gambar = file;
          this.gambarUrl = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },

    async handleImageUpload() {
      const formData = new FormData();
      formData.append("foto", this.newUser.gambar);
      try {
        const response = await axios.post(
          "http://localhost:9000/api/v1/cms/images",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.image._id);
        this.newUser.image = response.data.image._id;
      } catch (error) {
        console.error(error);
      }
    },

    async submitForm() {
      if (this.newUser.gambar) {
        await this.handleImageUpload();
      }
      const userData = {
        name: this.newUser.name,
        email: this.newUser.email,
        password: this.newUser.password,
        alamat: this.newUser.alamat,
        nomer_hp: this.newUser.nomer_hp,
        tanggal_lahir: this.newUser.tanggal_lahir,
        jenis_kelamin: this.newUser.jenis_kelamin,
        image: this.newUser.image,
      };
      console.log(this.newUser.image)
      try {
          const response = await axios.post(
            "http://localhost:9000/api/v1/cms/users",
            userData
          );

          console.log(response.data)
          await Swal.fire({
            icon: 'success',
            title: 'Success Create Data',
            text: 'You have successfully added data',
          });

          this.$router.push('/dashboard').then(() => {
            window.location.reload();
          });

        } catch (error) {
          await Swal.fire({
            icon: 'warning',
            title: 'Failed Create Data',
            text: error.response.data.msg,
          });
        }
    },
    prevPage() {
      // pergi ke halaman sebelumnya
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      // pergi ke halaman selanjutnya
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
  },
  computed: {
    filteredUsers(): User[] {
      return this.users.filter((user: User) =>
        user.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    pageCount() {
      // menghitung jumlah halaman
      return Math.ceil(this.items.length / this.pageSize);
    },
    pages() {
      // membuat daftar nomor halaman
      const pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
    paginatedItems() {
      // membagi data tabel ke halaman-halaman
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.items.slice(startIndex, startIndex + this.pageSize);
    }

  },

  components: {
    Navbar,
  },
});
</script>




<style>
.row{
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.img-gambar{
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 100px auto;
}





    .create{
        position: relative;
        width: 82%;
        padding: 20px;
        display: grid;
        height: 900px;
        overflow: hidden;
        top: 110px;
        left: 320px;
        gap: 20px;
        transition: all 0.5s;
    }

    .create.active{
      left: 70px;
      width: 95%;
    }
    .grid-row{
      display: grid;
      margin-left: 20px;
    }
    input[type=text]{
      border: none;
      height: 50px;
      width: 98%;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
    }
    input[type=password]{
      border: none;
      height: 50px;
      width: 98%;
      position: relative;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
      background-color: white;
    }
    input[type=date]{
      border: none;
      height: 50px;
      width: 98%;
      position: relative;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
      background-color: white;
      padding-right: 20px;
    }
    input[type=email]{
      border: none;
      height: 50px;
      width: 98%; 
      position: relative;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
      background-color: white;
      padding-right: 20px;
    }
    input[type=number]{
      border: none;
      height: 50px;
      width: 98%;
      position: relative;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
      background-color: white;
      padding-right: 20px;
    }
    select{
      border: none;
      height: 50px;
      width: 98%;
      position: relative;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
      background-color: white;
    }
    input[type=file]{
      border: none;
      height: 50px;
      width: 98%;
      padding: 12px 0 0 0;
      position: relative;
      box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding-left: 20px;
      margin-bottom: 20px;
      background-color: white;
    }

    input[type=text]:focus{
      outline: none;

    }

    .form-all{
      margin-left: 20px;
      margin-top: 20px;
    }

    .img{
      background-color: aqua;
      height: 99%;
      width: 95%;
      margin: 10px 0 10px 10px;
      border-radius: 20px;
      display: flex;
    }

    .btn-success{
      width: 98%;
      height: 50px;
      border-radius: 20px;
    }


 

</style>
