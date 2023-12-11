

const dateFormat = {
    formatDateTime: (date) => {
      const formattedDate = new Date(date).toLocaleString(); // Adjust the format as needed
      return formattedDate;
    },
  };
  
  module.exports = dateFormat;
  