<template>
  <div>
    <h1>Request Form</h1>
    <div class="step-container">
      <div
        class="step-item"
        v-for="step in steps"
        :key="step.number"
        :class="{ active: step.isActive, completed: step.isCompleted }"
      >
        <div class="step-number">{{ step.number }}</div>
        <div class="step-label">{{ step.label }}</div>
      </div>
    </div>

    <!-- Router view for dynamic step components -->
    <router-view :key="currentStep" :event-info="eventInfo" @send-data="sendData"></router-view>

    <div class="button-container">
      <button @click="goHome">Home</button>
      <button @click="goToPreviousStep" :disabled="currentStep === 1">
        Back
      </button>
      <button @click="goToNextStep" :disabled="currentStep === steps.length">
        Next
      </button>
      <button @click="submitOrder" :disabled="currentStep !== 4">
        Submit Order
      </button>
    </div>
  </div>
</template>

<script>
import router from '../../router';
import Step1 from '../../views/step1.vue';
import Step2 from '../../views/step2.vue';
import Step3 from '../../views/step3.vue';
import Step4 from '../../views/step4.vue';
import Receipt from '../Receipt/Receipt.vue';

export default {
  data() {
    return {
      currentStep: 1,
      steps: [
        {
          number: 1,
          label: "Select Date and Time",
          isActive: true,
          isCompleted: false,
        },
        {
          number: 2,
          label: "Complete Form",
          isActive: false,
          isCompleted: false,
        },
        {
          number: 3,
          label: "Policy Agreement",
          isActive: false,
          isCompleted: false,
        },
        {
          number: 4,
          label: "Review Submission",
          isActive: false,
          isCompleted: false,
        },
      ],
      eventInfo: {
        contactFirstName: "",
        contactLastName:  "",
        email: "",
        eventTitle: "",
        eventDescription: "",
        selectedDate: "",
        startTime: "",
        endTime: "",
        organizationName: "",
        phoneNumber: "",
        address: "",
        specialInstruction: "",
        outsideOrg: "",
        expenseBenefit: "",
        eventType: "",
      }
    };
  },
  methods: {
    goHome() {
      router.push('/');
    },
    goToNextStep() {
      if (this.currentStep < this.steps.length) {
        this.steps[this.currentStep - 1].isCompleted = true;
        this.steps[this.currentStep - 1].isActive = false;
        this.currentStep++;
        this.steps[this.currentStep - 1].isActive = true;
        router.push(`/step${this.currentStep}`);
      }
    },
    goToPreviousStep() {
      if (this.currentStep > 1) {
        this.steps[this.currentStep - 1].isActive = false;
        this.currentStep--;
        this.steps[this.currentStep - 1].isActive = true;
        router.push(`/step${this.currentStep}`);
      }
    },
    sendData(data) {
      this.eventInfo = data;
    },
    submitOrder() {
      router.push(`/receipt`);
    }
  },
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Receipt
  }
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  margin-left: 50px;
  color: white;
}

.step-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
}

.step-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  color: #6a1b9a;
  border-radius: 50%;
  font-weight: bold;

  &.completed {
    background-color: green;
    color: #fff;
  }
}

.step-label {
  margin-top: 0.5rem;
  color: #fff;
  text-align: center;
}

.active .step-number {
  background-color: green;
  color: #fff;
}

.button-container {
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100%;
}

button {
  padding: 1rem 2rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;

  &:hover {
    background-color: darken(#6a1b9a, 10%);
  }

  &:disabled {
    background-color: lighten(#6a1b9a, 10%);
    cursor: not-allowed;
  }
}
</style>
