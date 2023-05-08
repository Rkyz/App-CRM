<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-login">
        <div class="side-image">
            <img src="https://picsum.photos/200/300" class="img" alt="" srcset="">
        </div>
        <div class="side-login">
            <h1 class="title-welcome">Welcome to</h1>
            <h1 class="title-robo">CRM Project</h1>
            <button class="login-google">
                <div class="svg-a">
                    <svg width="36" height="36"  viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_161_564)">
                        <path d="M35.981 18.3368C35.981 16.8619 35.8585 15.7856 35.5934 14.6694H18.3585V21.3264H28.475C28.2711 22.9808 27.1697 25.4722 24.7221 27.1463L24.6878 27.3692L30.1372 31.4945L30.5147 31.5313C33.982 28.4021 35.981 23.7979 35.981 18.3368Z" fill="#4285F4"/>
                        <path d="M18.3585 35.8764C23.3148 35.8764 27.4756 34.2818 30.5147 31.5314L24.7221 27.1464C23.172 28.2027 21.0916 28.9402 18.3585 28.9402C13.5042 28.9402 9.38421 25.8111 7.91553 21.486L7.70026 21.5038L2.03394 25.7891L1.95984 25.9904C4.97846 31.8501 11.179 35.8764 18.3585 35.8764Z" fill="#34A853"/>
                        <path d="M7.91553 21.4859C7.52801 20.3698 7.30373 19.1738 7.30373 17.9382C7.30373 16.7023 7.52801 15.5065 7.89514 14.3904L7.88488 14.1527L2.14755 9.79858L1.95983 9.88584C0.715711 12.3175 0.00183105 15.0481 0.00183105 17.9382C0.00183105 20.8282 0.715711 23.5587 1.95983 25.9903L7.91553 21.4859Z" fill="#FBBC05"/>
                        <path d="M18.3585 6.93604C21.8055 6.93604 24.1306 8.39102 25.4564 9.60691L30.6371 4.66392C27.4553 1.77389 23.3148 0 18.3585 0C11.179 0 4.97847 4.02609 1.95984 9.88585L7.89515 14.3904C9.38422 10.0653 13.5042 6.93604 18.3585 6.93604Z" fill="#EB4335"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_161_564">
                        <rect width="36" height="36" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    <span class="a-login-google">Login with Google </span>
                </div>
            </button>
            <button class="login-facebook">
                <div class="svg-a">
                    <svg
                        width="20"
                        height="36"
                        viewBox="0 0 20 36"
                        fill="none"
                        class="svg-fc"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.9816 35.9998V19.5785H18.8782L19.761 13.1788H12.9816V9.09283C12.9816 7.24002 13.5321 5.97723 16.3747 5.97723L20 5.97566V0.251898C19.3727 0.17419 17.2208 0 14.7173 0C9.49034 0 5.91187 2.98227 5.91187 8.45935V13.179H0V19.5787H5.91168V36L12.9816 35.9998Z"
                            fill="#3C5A9A"/>
                    </svg>
                  <span class="a-login-facebook"> Login with Facebook</span>
                </div>
            </button>
            <div class="line-and-or">
                <div class="line1">
                </div>
                <div class="or">
                    <p>OR</p>
                </div>
                <div class="line2">
                </div>
            </div>
            <form action="" @submit.prevent="login">
                  <div class="input-group mb-3 email-top">
                    <span class="input-group-text email-icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H30C31.65 6 33 7.35 33 9V27C33 28.65 31.65 30 30 30H6C4.35 30 3 28.65 3 27V9C3 7.35 4.35 6 6 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33 9L18 19.5L3 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                            
                    </span>
                    <div class="form-floating">
                      <input type="email" class="form-control email"  placeholder="Username" v-model="email">
                      <label for="floatingInputGroup1" class="label-form">Email</label>
                    </div>
                  </div>
                  <div class="input-group mb-3 password-top">
                    <span class="input-group-text pw-icon">        
                    <svg
                        width="32"
                        height="31"
                        viewBox="0 0 32 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.25 9.25L26.5 4M29.5 1L26.5 4L29.5 1ZM15.085 15.415C15.8596 16.1792 16.4753 17.0891 16.8967 18.0922C17.3181 19.0953 17.5369 20.1719 17.5406 21.2599C17.5442 22.348 17.3326 23.426 16.9179 24.4319C16.5032 25.4379 15.8936 26.3518 15.1243 27.1212C14.3549 27.8906 13.4409 28.5002 12.435 28.9149C11.4291 29.3296 10.351 29.5412 9.26299 29.5375C8.17494 29.5339 7.09836 29.3151 6.09523 28.8936C5.0921 28.4722 4.18225 27.8565 3.41805 27.082C1.91524 25.526 1.08369 23.4421 1.10248 21.2789C1.12128 19.1158 1.98893 17.0466 3.51854 15.517C5.04816 13.9874 7.11736 13.1197 9.28049 13.1009C11.4436 13.0821 13.5276 13.9137 15.0835 15.4165L15.085 15.415ZM15.085 15.415L21.25 9.25L15.085 15.415ZM21.25 9.25L25.75 13.75L31 8.5L26.5 4L21.25 9.25Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <div class="form-floating">
                      <input type="password" class="form-control password"  placeholder="Username" v-model="password">
                      <label for="floatingInputGroup1" class="label-form">Password</label>
                    </div>
                  </div>
            </form>
            <div class="check-and-forget">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="">
                  <label class="form-check-label label-check" for="">
                    Remember me
                  </label>
                </div>
                <a href="" class="forget">Forget Password?</a>
            </div>
            <button class="btn-login" @click.prevent="login">Login</button>
            <div class="link-to-register text-center">
                <p>dont have account <a href="" class="link-register">Register</a></p>
            </div>
            </div>
        </div>
</template>

<script lang="ts">
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async login() {
      try {
        const response = await axios.post(
          'http://localhost:9000/api/v1/cms/auth/signin',
          {
            email: this.email,
            password: this.password,
          }
        );

        if (response.data && response.data.data && response.data.data.token && response.data.data.token.role) {
          const { role } = response.data.data.token;

          localStorage.setItem('token', response.data.data.token.token);
          console.log( response.data.data.token.token)
          console.log('hai')

          if (role === 'admin') {
            this.$router.push('/dashboard');
          } else {
            this.$router.push('/datauser');
          }
        } else {
          alert('bapak kau');
        }
      } catch (error) {
        console.error('Failed to delete user:', error);
          await Swal.fire(
            'Error!',
            error.response.data.msg,
            'error'
          );
      }
    },
  },
};







</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

.container-login{
    display: flex;
    position: fixed;
}
.side-login{
    margin: 0 0 0 140px;
}
.img{
    width: 1000px;
    height: 1024px;
}

.email[type="email"]{
    width: 610px;
    height: 50px;
    background: #F2F2F2;
    border-radius: 15px;
}
.password[type="password"]{
    width: 610px;
    height: 50px;
    background: #F2F2F2;
    border-radius: 15px;
}
.username[type="text"]{
    width: 610px;
    height: 79px;
    background: #F2F2F2;
    border-radius: 15px;
}

.title-welcome{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    margin-top: 30px;
}

.title-robo{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    margin-top: 24px;
    color: #00337C;
}

.login-google{
    display: inline-block;
    width: 673px;
    height: 94px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-align: center;
    margin-top: 44px;
    border: none;
}
.login-facebook{
    display: inline-block;
    width: 673px;
    height: 94px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-align: center;
    margin-top: 25px;
    border: none;
}

.line-and-or{
    display: flex;
    margin-top: 46px;
    margin-left: 1px;
}
.line1{
    width: 296px;
    height: 0px;
    border: 1px solid rgba(0, 0, 0, 0.65);
    position: relative;
    left: 1px;
}

.line2{
    position: relative;
    width: 296px;
    left: 50px;
    height: 0px;
    border: 1px solid rgba(0, 0, 0, 0.65);
}

.or{
    position: relative;
    bottom: 12px;
    left: 25px;
    color: rgba(0, 0, 0, 0.65);
    font-family: 'Roboto';
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
}


.check-and-forget{
    display: flex;
    margin-top: 33px;
    position: relative;
}

.forget{
    left: 370px;
    position: relative;
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.65);

}

.btn-login{
    width: 662px;
    height: 79px;
    color: white;
    background: #00337C;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    margin-top: 67px;
}

.label-check{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
}

.link-register{
    text-decoration: none;
}

.link-to-register{
    left: 240px;
    position: relative;
    margin-top: 28px;
}

.a-login-google{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.75);
    margin-top: 38px;
    margin-left: 20px;

}
.a-login-facebook{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.75);
    margin-top: 38px;
    margin-left: 50px;
}


.svg-fc{
    position: relative;
    left: 24px;
}

.label-form{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
}

.username-top{
    margin-top: 30px;
}
.email-top{
    margin-top: 24px;
}

.password-top{
    margin-top: 23px;
}

.username-icon{
    width: 61px;
}
.pw-icon{
    width: 61px;
}
.text-center{
    left: -50px;
}

@media only screen and (max-width: 1000px) {
    .img{
      display: none;
    }
    .email[type="email"],
    .password[type="password"],
    .login-google,
    .login-facebook,
    .btn-login {
      width: 100%;
    }
    .forget {
      left: 328px;
    }
    .line-and-or{
      width: 92%;
    }
    .text-center{
        left: -1px;
    }

  }

/* Styles for screens with a maximum width of 768px */
@media (max-width: 768px) {
    .container-login {
      position: static;
      margin-right: 0;
      flex-direction: column;
    }
  
    .side-login {
      margin: 0;
    }
  
    .img {
      display: none;
    }
  
    .email[type="email"],
    .password[type="password"],
    .login-google,
    .login-facebook,
    .btn-login {
      width: 90%;
    }
  
    .title-welcome,
    .title-robo {
      font-size: 36px;
      margin-left: 20px;
    }
  
    .line-and-or {
      margin-top: 50px;
    }
  
    .link-to-register {

      margin-top: 15px;
    }
    .text-center{
        left: -1px;
    }
  
    .a-login-google,
    .a-login-facebook {
        top: 2px;
        position: relative;
      margin-left: 15px;
    }
  
    .svg-fc {
      left: 0;
    }
  
    .email-top,
    .password-top {
      margin-top: 20px;
    }

    .line1,
    .line2{
        margin-left: 16px;
        margin-top: 10px;
    }
    .line-and-or{
        width: 85%;
    }
    .or{
        margin-top: 12px;
        left: 35px;
    }
    .input-group,
    .check-and-forget,
    .login-facebook,
    .login-google{
        margin-left: 20px;
    }
    .btn-login{
        margin-left: 25px;
    }
    .check-and-forget{
        justify-content: space-between;
    }
    .forget{
        left: -20px;
    }
  }
</style>