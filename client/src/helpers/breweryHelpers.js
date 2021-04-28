export const handleSearch = async(search_input, amount) => {

   const url = `https://api.openbrewerydb.org/breweries/search?query=${search_input}&per_page=${amount}`;
   try {
       const options = {
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           }
       };
       const response = await fetch(url, options);
       const data = await response.json();
       return data;
   }
   catch(err) {
       return { status: 0, message: 'Can not connect to the server', code: 999 };
   }
};

// export const loadMore = async(search_input, amount) => {

//     const url = `https://api.openbrewerydb.org/breweries/search?query=${search_input}&per_page=${amount}`;
//     try {
//         const options = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         };
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data;
//     }
//     catch(err) {
//         return { status: 0, message: 'Can not connect to the server', code: 999 };
//     }
//  };