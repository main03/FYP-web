
const AdminLogin = async (name, password) => {
    try {
    
      const response = await fetch(`${process.env.REACT_APP_LOCAL_HOST_PATH}admin/login`, {
        method: "post",
        body: JSON.stringify({ name, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Successgully fetched at frontend");
      if (!response.ok) {
        throw new Error(`Error! status:`);
      }
      const result = await response.json();
      // return result;
      console.warn(result);
      localStorage.setItem("admintoken",JSON.stringify(result.token))
    } catch (err) {
      console.log(err);
    }
  };
  
  export default AdminLogin;
  