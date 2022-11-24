export default function ({ $axios, redirect, store }) {
  $axios.defaults.timeout = 10000;
  $axios.defaults.withCredentials = false;

  /* $axios.onError((error) => {
        const code = error.response ? parseInt(error.response.status) : 500
        if (code === 401) {
          redirect('/auth/login')
        }
      }) */
}
