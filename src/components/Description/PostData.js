// Your component code...

async function postData(data,url) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle the response data here
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
      // Handle any errors here
    }
  }
  
  // Call the postData function when needed
 export default postData;
  