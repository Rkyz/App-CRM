<!-- eslint-disable vue/require-v-for-key -->
<template>
  <Navbar :current-page="'dashboard'"  @button-clicked="toggleActive"/>
        <div class="cardBox row" :class="{ 'active': isActive }">
            <div class="card">
                <div>
                    <div class="numbers">{{ views }}</div>
                    <div class="cardName">Views</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">{{ userCount }}</div>
                    <div class="cardName">Jumlah Data</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="analytics-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">50</div>
                    <div class="cardName">Notification</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="notifications-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">100</div>
                    <div class="cardName">Users</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="people-outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="details-chart" :class="{ 'active': isActive }">
            <div class="row">
                <div class="col-md-12 col-lg-1.3 ">
                    <div class=" card">
                        <div class="card-header-tab card-header-tab-animation card-header">
                            <div class="card-header-title">
                                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                Sales Report
                            </div>
                            <ul class="nav">
                                <li class="nav-item"><a href="javascript:void(0);" class="active nav-link">Last</a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link second-tab-toggle">Current</a></li>
                            </ul>
                        </div>
                        <div class="card-body" style="height: 570px;">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tabs-eg-77">
                                    <div class="card mb-4 p-2  widget-chart2 text-left w-100">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                <Chart/>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Top Authors</h6>
                                    <div class="scroll-area-sm" style="height: 100px;">
                                        <div class="scrollbar-container">
                                            <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush" >
                                                <li class="list-group-item" v-for="(user) in filteredUsers">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">{{ user.name }}</div>
                                                                <div class="widget-subheading">{{ user.role }}</div>
                                                            </div>
                                                            <div class="widget-content-right">
                                                                <div class="font-size-xlg text-muted">

                                                                    <small class="text-danger pl-2">
                                                                        <i class="fa fa-angle-down"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-14">
                <div class="mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title">
                            <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                            Bandwidth Reports
                        </div>
                        <div class="btn-actions-pane-right">
                            <div class="nav">
                                <a href="javascript:void(0);" class="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate">Tab 1</a>
                                <a href="javascript:void(0);" class="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt">Tab 2</a>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="tab-eg-55">
                            <div class="widget-chart p-3 h-50">
                                <div style="height: 350px">
                                    <Pie/>
                                </div>
                                <div class="widget-chart-content text-center mt-5">
                                    <div class="widget-description mt-0 text-warning">
                                        <i class="fa fa-arrow-left"></i>
                                        <span class="pl-1">175.5%</span>
                                        <span class="text-muted opacity-8 pl-1">increased server resources</span>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-2 card-body ">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="widget-content">
                                            <div class="widget-content-outer">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left">
                                                        <div class="widget-numbers fsize-3 text-muted">{{ adminPercentage }}%</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="text-muted opacity-6">Admin</div>
                                                    </div>
                                                </div>
                                                <div class="widget-progress-wrapper mt-1">
                                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" :style="{ width: adminPercentage + '%' }"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="widget-content">
                                            <div class="widget-content-outer">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left">
                                                        <div class="widget-numbers fsize-3 text-muted">{{ userPercentage }}%</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="text-muted opacity-6">Users</div>
                                                    </div>
                                                </div>
                                                <div class="widget-progress-wrapper mt-1">
                                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" :style="{ width: userPercentage + '%' }"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="details" :class="{ 'active': isActive }">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="card-header">Recent Data
                            <div class="btn-actions-pane-right">
                                <div role="group" class="btn-group-sm btn-group">
                                    <button class="active btn btn-focus">Last Week</button>
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
                                <tr v-for="(user,index) in filteredUsers">
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
                                        <div class="badge badge-primary">{{ user.role }}</div>
                                    </td>
                                    <td class="text-center">
                                        <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm mr-2" @click="deleteUser(user._id)">Delete</button>
                                        <a :href="Data" id="PopoverCustomT-1" class="btn btn-primary btn-sm" >View</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-block text-center card-footer">
                            <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                            <button class="btn-wide btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import  Pie  from '../../components/PieChartComponent.vue';
import Swal from 'sweetalert2';
import Navbar from "../../components/NavigationComponents.vue";
import Chart from "../../components/ChartComponents.vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
  role: string;
}

export default defineComponent({
  name: 'DashboardView',
  data() {
    return {
      users: [] as User[],
      filterText: "",
      isActive: false,
      userCount: 0,
      views: 0,
      Data: '/Data',
      chartData: {
        labels: [ 'January', 'February', 'March', 'April' ],
        datasets: [ { data: [40, 20, 12, 92] } ]
      },
      chartOptions: {
        responsive: true
      },
      data: []
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
    try {
        const response = await fetch('http://localhost:9000/api/v1/cms/users') // Ganti dengan URL API yang sesuai
        const json = await response.json()
        this.data = json.data
      } catch (error) {
        console.error(error)
      }
  },

  

  methods: {
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
      const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'success',
            title: 'Successfully Deleted '
            }).then(() => {
        window.location.reload();
      });
    }
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
},


  async ViewAll(){
    this.$router.push('/data');
  },

    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    filteredUsers(): User[] {
      return this.users.filter((user: User) =>
        user.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    adminPercentage() {
        const total = this.data.length
        const adminCount = this.data.filter(item => item.role === 'admin').length
        return ((adminCount / total) * 100).toFixed(2)
      },
      userPercentage() {
        const total = this.data.length
        const userCount = this.data.filter(item => item.role === 'user').length
        return ((userCount / total) * 100).toFixed(2)
      }
  },

  components:{
    Navbar,
    Pie,
    Chart
  }
});
</script>


<style>


.charts-css{
    margin: 40px;
}



    .cardBox{
        position: relative;
        width: 83.2%;
        padding: 20px;
        display: grid;
        gap: 30px;
        left: 315px;
        grid-template-columns: repeat(4,1fr);
        top: 90px;
        transition: all 0.5s;
        height: 160px;
    }

    .cardBox.active{
        left: 75px;
        width: 95%;
    }

    .cardBox .card{
        position: relative;
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 5fr 1fr;
        cursor: pointer;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
        height: 150px;
    }

    .cardBox .card .numbers{
        position: relative;
        font-weight: 500;
        font-size: 2.5em;
        color: blue;
    }
    .cardBox .card .cardName{
        position: relative;
        font-weight: 500;
        font-size: 1.1em;
        margin-top: 5px;
        color: black;
    }

    .cardBox .card .iconBx{
        font-size: 3.5em;
        color: black;
        margin-top: 15px;
    }

    .cardBox .card:hover{
        background-color: blue;
    }

    .cardBox .card:hover .numbers,
    .cardBox .card:hover .cardName,
    .cardBox .card:hover .iconBx{
        color: white;
    }

    .details{
        position: relative;
        width: 84%;
        padding: 20px;
        display: grid;
        grid-gap: 30px;
        top: 550px;
        left: 300px;
        height: 300px;
        transition: all 0.5s;
    }
    
    .details.active{
        left: 75px;
        width: 95%;
    }


    .details-chart{
        position: relative;
        width: 84%;
        padding: 20px;
        display: grid;
        grid-template-columns: 3fr 3fr;
        grid-gap: -10px;
        top: 100px;
        left: 300px;
        height: 300px;
        transition: all 0.5s;
    }

    .details-chart.active{
        left: 75px;
        width: 95%;
    }

    .details .recentOrders{
        min-height: 700px;
        display: grid;
        position: relative;
        padding: 20px;
        grid-template-rows: 1fr 3fr;
        background-color: white;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
        overflow-y: scroll;
    }

    .cardHeader{
        display: flex;
        position: sticky;
        justify-content: space-between;
        align-items: flex-start;
    }
    .cardHeaderdata{
        display: flex;
        position: sticky;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px;
        border-radius: 10px;
        background-color: #551cab;
        margin-bottom: 10px;
    }
    .cardHeaderdata h2{
        font-weight: 600;
        color: white;
    }

    .btn{
        position: relative;
        padding: 5px 10px;
        background-color: white;
        text-decoration: none;
        color: black;
        font-weight: 600;
        border-radius: 6px;
    }

    .details table{
        width: 100%;
        height: 50px;
        border-collapse: collapse;
    }

    .details table thead td{
        font-weight: 600;
    }




    .details .recentOrders table tr:last-child{
        border-bottom: none;
    }
    .details .recentOrders table tbody tr:hover{
        background-color: blue;
        color: white;
    }
    .details .recentOrders table tr td{
        padding: 10px;
    }
    .details .recentOrders table tr td:last-child{
        text-align: end;
    }
    .details .recentOrders table tr td:nth-child(2){
        text-align: center;
    }
    .details .recentOrders table tr td:nth-child(3){
        text-align: center;
    }

    .status.done{
        padding: 2px 4px;
        color: white;
        background-color: black;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;    
    }
    .status.cancel{
        padding: 2px 4px;
        color: white;
        background-color: red;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;    
    }
    .status.waiting{
        padding: 2px 4px;
        color: black;
        background-color: yellow;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;    
    }

    .recentCustomers{
        position: relative;
        display: grid;
        min-height: 500px;
        padding: 20px;
        background-color: white;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
    }

    .recentCustomers .imgBx{
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }

    .details .recentCustomers tr td{
        padding: 10px;
    }


    .details .recentCustomers table tbody tr:hover{
        background-color: blue;
        color: white;
    }

    .details .recentCustomers{
        overflow-y: scroll;
    }

    .chart-diagram-box{
        position: relative;
        display: grid;
        min-height: 300px;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }
    .chart-rounded-box{
        position: relative;
        display: grid;
        min-height: 300px;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    h4{
        font-size: 1em;
    }
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pie-wrap{
        border: 2px solid lightgrey;
        width: 200px;
        height: 200px;
        margin: 10% 50px;
        position: relative;
        border-radius: 50%;
        color: black;
        overflow: hidden;
    }

    .pie-wrap .entry{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    /* *the individual entries* */
    
    .sky-blue{
        background-color: lightskyblue;
        height:50%;
        width: 50%;
        display: block;
    }
    
    .light-yellow{
        background-color: lightyellow;
        height:50%;
        width: 50%;
    }

    .pink{
        background-color: pink;
        height:50%;
        position: absolute;
        top: 0px;
        right: 0;
        width: 50%;
        clip-path: polygon(0 0, 100% 0%, 0% 100%);
    }
    
    .purple{
        background-color: purple;
        height:50%;
        width: 50%;
        right: 0;
        top: 0;
        position: absolute;
        clip-path:polygon(0% 100%, 100% 0%, 100% 100%);
    }
    
    .green{
        background-color: limegreen;
        height:50%;
        width: 50%;
        right: 0;
        top: 50%;
        position: absolute;
        clip-path:polygon(0% 0%, 100% 0%, 100% 100%);
    }
    
    .wheat{
        background-color: wheat;
        height:50%;
        width: 50%;
        right: 0;
        top: 50%;
        position: absolute;
        clip-path:polygon(0% 0%, 100% 100%, 0% 100%);
    }

    .pie-wrap .purple p{
        position: absolute;
        top: 140px;
        color: white;
    }
    .pie-wrap .purple p:first-child{
        top: 120px;
    }
    
    .pie-wrap .green p{
        position: absolute;
        top: 20px;
    }
    
    .pie-wrap .green p:first-child{
        top: 0px;
    }
    
    .pie-wrap .pink p, .pie-wrap .wheat p{
        position: absolute;
        left: 20px;
        top: 80px;
    }
    
    .pie-wrap .pink, .pie-wrap .wheat{
        justify-content: flex-start;
    }
    
    .pie-wrap .pink p:first-child, .pie-wrap .wheat p:first-child{
        top: 100px;
    }

    .entry .entry-value{
        display: none;
        transition: all 500ms linear;
    }
    .entry:hover .entry-value{
        display: block;
    }

    .entry{
        transition: all 500ms linear ;
    }
    .entry:hover{
        filter: invert();
    }

 
</style>