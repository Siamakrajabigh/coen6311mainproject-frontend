fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
      .then(response => response.json())
      .then(json => console.log(json))