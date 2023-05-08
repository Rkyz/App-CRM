
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export default defineComponent({
    data() {
      return {
        users: [] as User[],
        form: {
          id: null as number | null,
          name: '',
          email: '',
        },
      };
    },
    async mounted() {
      const response = await axios.get('/api/users');
      this.users = response.data;
    },
    methods: {


    },
  });
  </script>
