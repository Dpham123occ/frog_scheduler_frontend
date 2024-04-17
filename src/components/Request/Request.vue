<template>
  <div>
    <h1>Request Form</h1>
    <div class="step-container">
      <div class="step-item" v-for="step in steps" :key="step.number"
        :class="{ active: step.isActive, completed: step.isCompleted }">
        <div class="step-number">{{ step.number }}</div>
        <div class="step-label">{{ step.label }}</div>
      </div>
    </div>

    <router-view @change-step="handleStepChange"></router-view>

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
import router from '../../router';

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
        this.steps[this.currentStep - 1].isCompleted = true;
        this.steps[this.currentStep - 1].isActive = false;
        this.currentStep++;
        this.steps[this.currentStep - 1].isActive = true;
      }
    },
    goToPreviousStep() {
      if (this.currentStep > 1) {
        this.steps[this.currentStep - 1].isActive = false;
        this.currentStep--;
        this.steps[this.currentStep - 1].isActive = true;
      }
    },
    handleStepChange(step) {
      this.currentStep = step;

      // Define the mapping from step number to route name
      const stepToRouteName = {
        1: '/step1',
        2: '/step2',
        3: '/step3',
        4: '/step4'
      };

      // Get the route name based on the current step
      const routeName = stepToRouteName[step];
      router.push({ name: routeName });
     
    },
  },
};
</script>


<style lang="scss" scoped>
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
  align-items: center;
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
