<template>
    <div class="pricing">
        <div class="info">
            <h1>Payment Information</h1>
            <h2>Spirit Appearance Fees</h2>
            <p>
                GENERAL APPEARANCES – Rates Per Appearance (All events outside of a TCU
                Athletic match are paid appearances. Mascot times will be determined by
                type of event, please contact office for more details.)
            </p>
        </div>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Price</th>
            <th>Performer(s)</th>
            <th>Hours of Service</th>
            <th>Costume Options</th>
            <th>Photo Opportunities</th>
            <th>Performance &amp; Entertainment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bronze</td>
            <td>$50/hour</td>
            <td>1</td>
            <td>Up to 2 hours</td>
            <td>Basic</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Silver</td>
            <td>$75/hour</td>
            <td>1</td>
            <td>Up to 3 hours</td>
            <td>Advanced</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>$100/hour</td>
            <td>2</td>
            <td>Up to 4 hours</td>
            <td>Premium</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
<style scoped>

  .info {
    border-top: 10px solid transparent; /* Top border */
    border-left: 10px solid transparent; /* Left border */
    border-bottom: 10px solid transparent;
    color: white;
    padding: 10 10 10 10;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: gray;
    color:white;
    align-self: center;
    text-align: center;
  }
  
  th, td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #151313;
  }
  </style>