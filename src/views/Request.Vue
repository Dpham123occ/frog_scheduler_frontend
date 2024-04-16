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

    <div v-if="currentStep === 1">
      <date-time-picker @change-step="handleStepChange"></date-time-picker>
    </div>
    <!-- Add your form components or other content here -->
    <div class="button-container">
      <button @click="goToPreviousStep" :disabled="currentStep === 1">
        Back
      </button>
      <button @click="goToNextStep" :disabled="currentStep === steps.length">
        Next
      </button>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    goToNextStep() {
      if (this.currentStep < this.steps.length) {
        this.steps[this.currentStep - 1].isActive = false;
        this.steps[this.currentStep - 1].isCompleted = true;
        this.steps[this.currentStep].isActive = true;
        this.currentStep++;
      }
    },
    goToPreviousStep() {
      if (this.currentStep > 1) {
        this.steps[this.currentStep - 1].isActive = false;
        this.steps[this.currentStep - 2].isActive = true;
        this.steps[this.currentStep - 2].isCompleted = false;
        this.currentStep--;
      } 
      if (this.currentStep == 0) {

      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
