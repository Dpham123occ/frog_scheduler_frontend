<template>
    <div class="date-time-picker">
      <div class="form-group">
        <label for="select-date">Select date</label>
        <datepicker v-model="selectedDate" id="select-date"></datepicker>
      </div>
  
      <div class="form-group">
        <label for="start-time">Select starting time</label>
        <timepicker v-model="startTime" id="start-time" format="HH:mm:ss"></timepicker>
      </div>
  
      <div class="form-group">
        <label for="end-time">Select ending time</label>
        <timepicker v-model="endTime" id="end-time" format="HH:mm:ss"></timepicker>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: new Date(), // default to today, but you can make it null or a specific date
        startTime: '08:00:00',
        endTime: '09:00:00',
      };
    },
  };
  </script>
  
  <style scoped>
  .date-time-picker {
    /* Add styles here to match the look and feel of your form */
  }
  
  .form-group {
    margin-bottom: 1rem;
  }

  </style>
  