document.addEventListener("DOMContentLoaded", () => {
    const fitnessForm = document.getElementById("fitness-form");
    const resultsSection = document.getElementById("results-section");
    const generatePlanBtn = document.getElementById("generate-plan-btn");
    const generateNewPlanBtn = document.getElementById("generate-new-plan-btn");
    const generatedForUser = document.getElementById("generated-for-user");
    const workoutPlanName = document.getElementById("workout-plan-name");
    const workoutPlanDetails = document.getElementById("workout-plan-details");
    const dietPlanCalories = document.getElementById("diet-plan-calories");
    const dietPlanDetails = document.getElementById("diet-plan-details");

    let userData = {};

    // Helper function to get form data
    const getFormData = () => {
        return {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            weight: document.getElementById("weight").value,
            height: document.getElementById("height").value,
            goal: document.getElementById("goal").value,
            experience: document.getElementById("experience").value,
            availability: document.getElementById("availability").value,
            focusArea: document.getElementById("focusArea").value,
            dietaryRestrictions: document.getElementById("dietaryRestrictions").value,
            mealPreference: document.getElementById("mealPreference").value,
            cookingTime: document.getElementById("cookingTime").value,
            budget: document.getElementById("budget").value,
        };
    };

    // Logic for generating workout plan (adapted from React code)
    const generateWorkoutPlan = (data) => {
        const workoutPlans = {
            '3': {
                name: 'Treino ABC - 3x por semana',
                days: [
                    {
                        day: 'Dia A - Peito, Ombro e Tríceps',
                        exercises: [
                            { name: 'Supino reto', sets: '4', reps: '8-12', rest: '90s' },
                            { name: 'Supino inclinado', sets: '3', reps: '10-12', rest: '90s' },
                            { name: 'Desenvolvimento militar', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Elevação lateral', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Tríceps testa', sets: '3', reps: '10-12', rest: '60s' },
                            { name: 'Tríceps corda', sets: '3', reps: '12-15', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Dia B - Costas e Bíceps',
                        exercises: [
                            { name: 'Puxada frontal', sets: '4', reps: '8-12', rest: '90s' },
                            { name: 'Remada curvada', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Remada unilateral', sets: '3', reps: '10-12', rest: '60s' },
                            { name: 'Rosca direta', sets: '4', reps: '10-12', rest: '60s' },
                            { name: 'Rosca martelo', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Rosca concentrada', sets: '3', reps: '10-12', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Dia C - Pernas e Glúteos',
                        exercises: [
                            { name: 'Agachamento livre', sets: '4', reps: '8-12', rest: '2min' },
                            { name: 'Leg press', sets: '4', reps: '12-15', rest: '90s' },
                            { name: 'Stiff', sets: '4', reps: '10-12', rest: '90s' },
                            { name: 'Cadeira extensora', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Mesa flexora', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Panturrilha em pé', sets: '4', reps: '15-20', rest: '60s' }
                        ]
                    }
                ]
            },
            '4': {
                name: 'Treino ABCD - 4x por semana',
                days: [
                    {
                        day: 'Dia A - Peito e Tríceps',
                        exercises: [
                            { name: 'Supino reto', sets: '4', reps: '8-12', rest: '90s' },
                            { name: 'Supino inclinado', sets: '4', reps: '10-12', rest: '90s' },
                            { name: 'Crucifixo', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Tríceps testa', sets: '4', reps: '10-12', rest: '60s' },
                            { name: 'Tríceps corda', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Mergulho', sets: '3', reps: '8-12', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Dia B - Costas e Bíceps',
                        exercises: [
                            { name: 'Puxada frontal', sets: '4', reps: '8-12', rest: '90s' },
                            { name: 'Remada curvada', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Remada unilateral', sets: '3', reps: '10-12', rest: '60s' },
                            { name: 'Rosca direta', sets: '4', reps: '10-12', rest: '60s' },
                            { name: 'Rosca martelo', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Rosca 21', sets: '3', reps: '21', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Dia C - Ombros e Abdômen',
                        exercises: [
                            { name: 'Desenvolvimento militar', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Elevação lateral', sets: '4', reps: '12-15', rest: '60s' },
                            { name: 'Elevação posterior', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Encolhimento', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Abdominal supra', sets: '4', reps: '20-25', rest: '45s' },
                            { name: 'Prancha', sets: '3', reps: '45-60s', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Dia D - Pernas e Glúteos',
                        exercises: [
                            { name: 'Agachamento livre', sets: '4', reps: '8-12', rest: '2min' },
                            { name: 'Leg press', sets: '4', reps: '12-15', rest: '90s' },
                            { name: 'Stiff', sets: '4', reps: '10-12', rest: '90s' },
                            { name: 'Afundo', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Cadeira extensora', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Panturrilha sentado', sets: '4', reps: '15-20', rest: '60s' }
                        ]
                    }
                ]
            },
            '5': {
                name: 'Treino Push/Pull/Legs - 5x por semana',
                days: [
                    {
                        day: 'Push - Peito, Ombro e Tríceps',
                        exercises: [
                            { name: 'Supino reto', sets: '4', reps: '6-8', rest: '2min' },
                            { name: 'Supino inclinado', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Desenvolvimento militar', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Elevação lateral', sets: '4', reps: '12-15', rest: '60s' },
                            { name: 'Tríceps francês', sets: '4', reps: '10-12', rest: '60s' },
                            { name: 'Tríceps corda', sets: '3', reps: '12-15', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Pull - Costas e Bíceps',
                        exercises: [
                            { name: 'Barra fixa', sets: '4', reps: '6-10', rest: '2min' },
                            { name: 'Remada curvada', sets: '4', reps: '8-10', rest: '90s' },
                            { name: 'Puxada frontal', sets: '4', reps: '10-12', rest: '90s' },
                            { name: 'Remada unilateral', sets: '3', reps: '10-12', rest: '60s' },
                            { name: 'Rosca direta', sets: '4', reps: '8-12', rest: '60s' },
                            { name: 'Rosca martelo', sets: '3', reps: '12-15', rest: '60s' }
                        ]
                    },
                    {
                        day: 'Legs - Pernas Completo',
                        exercises: [
                            { name: 'Agachamento livre', sets: '5', reps: '6-10', rest: '2min' },
                            { name: 'Leg press', sets: '4', reps: '12-15', rest: '90s' },
                            { name: 'Stiff', sets: '4', reps: '8-12', rest: '90s' },
                            { name: 'Afundo búlgaro', sets: '3', reps: '12-15', rest: '60s' },
                            { name: 'Cadeira extensora', sets: '3', reps: '15-20', rest: '60s' },
                            { name: 'Panturrilha em pé', sets: '5', reps: '15-20', rest: '60s' }
                        ]
                    }
                ]
            }
        };

        return workoutPlans[data.availability] || workoutPlans['3'];
    };

    // Logic for generating diet plan (adapted from React code)
    const generateDietPlan = (data) => {
        const baseCalories = data.goal === 'perder-peso' ? 1800 : data.goal === 'ganhar-massa' ? 2500 : 2200;

        const dietPlans = {
            'tradicional': {
                dailyCalories: baseCalories,
                meals: [
                    {
                        name: 'Café da Manhã',
                        time: '07:00',
                        foods: ['2 fatias de pão integral', 'Ovo mexido (2 unidades)', 'Abacate (1/2 unidade)', 'Café com leite'],
                        calories: Math.round(baseCalories * 0.25)
                    },
                    {
                        name: 'Lanche da Manhã',
                        time: '10:00',
                        foods: ['Banana (1 unidade)', 'Castanhas (30g)', 'Iogurte natural'],
                        calories: Math.round(baseCalories * 0.15)
                    },
                    {
                        name: 'Almoço',
                        time: '12:30',
                        foods: ['Arroz integral (100g)', 'Feijão (80g)', 'Frango grelhado (150g)', 'Salada verde', 'Legumes refogados'],
                        calories: Math.round(baseCalories * 0.35)
                    },
                    {
                        name: 'Lanche da Tarde',
                        time: '15:30',
                        foods: ['Whey protein (30g)', 'Aveia (30g)', 'Frutas vermelhas'],
                        calories: Math.round(baseCalories * 0.15)
                    },
                    {
                        name: 'Jantar',
                        time: '19:00',
                        foods: ['Batata doce (150g)', 'Salmão grelhado (120g)', 'Brócolis no vapor', 'Salada de folhas'],
                        calories: Math.round(baseCalories * 0.10)
                    }
                ]
            },
            'low-carb': {
                dailyCalories: baseCalories,
                meals: [
                    {
                        name: 'Café da Manhã',
                        time: '07:00',
                        foods: ['Ovos mexidos (3 unidades)', 'Abacate (1/2 unidade)', 'Queijo cottage', 'Café sem açúcar'],
                        calories: Math.round(baseCalories * 0.25)
                    },
                    {
                        name: 'Lanche da Manhã',
                        time: '10:00',
                        foods: ['Castanhas do Brasil (30g)', 'Queijo minas (50g)'],
                        calories: Math.round(baseCalories * 0.15)
                    },
                    {
                        name: 'Almoço',
                        time: '12:30',
                        foods: ['Carne vermelha magra (150g)', 'Salada verde abundante', 'Azeite extra virgem', 'Couve-flor refogada'],
                        calories: Math.round(baseCalories * 0.35)
                    },
                    {
                        name: 'Lanche da Tarde',
                        time: '15:30',
                        foods: ['Whey protein (30g)', 'Amendoim (20g)', 'Água de coco'],
                        calories: Math.round(baseCalories * 0.15)
                    },
                    {
                        name: 'Jantar',
                        time: '19:00',
                        foods: ['Peixe grelhado (150g)', 'Aspargos grelhados', 'Salada de rúcula', 'Azeite de oliva'],
                        calories: Math.round(baseCalories * 0.10)
                    }
                ]
            },
            'vegetariano': {
                dailyCalories: baseCalories,
                meals: [
                    {
                        name: 'Café da Manhã',
                        time: '07:00',
                        foods: ['Aveia (50g)', 'Leite de amêndoas', 'Banana (1 unidade)', 'Chia (15g)', 'Mel'],
                        calories: Math.round(baseCalories * 0.25)
                    },
                    {
                        name: 'Lanche da Manhã',
                        time: '10:00',
                        foods: ['Mix de castanhas (30g)', 'Maçã (1 unidade)'],
                        calories: Math.round(baseCalories * 0.15)
                    },
                    {
                        name: 'Almoço',
                        time: '12:30',
                        foods: ['Quinoa (100g)', 'Feijão preto (100g)', 'Tofu grelhado (100g)', 'Salada colorida', 'Tahine'],
                        calories: Math.round(baseCalories * 0.35)
                    },
                    {
                        name: 'Lanche da Tarde',
                        time: '15:30',
                        foods: ['Proteína vegetal (30g)', 'Leite de coco', 'Frutas vermelhas'],
                        calories: Math.round(baseCalories * 0.15)
                    },
                    {
                        name: 'Jantar',
                        time: '19:00',
                        foods: ['Grão-de-bico (100g)', 'Vegetais grelhados', 'Salada de folhas verdes', 'Azeite de oliva'],
                        calories: Math.round(baseCalories * 0.10)
                    }
                ]
            }
        };

        return dietPlans[data.mealPreference] || dietPlans['tradicional'];
    };

    // Handle form submission
    fitnessForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        generatePlanBtn.disabled = true;
        generatePlanBtn.innerHTML = 
            `<i class="fas fa-spinner fa-spin"></i> Gerando seu plano...`;

        userData = getFormData();

        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        const workoutPlan = generateWorkoutPlan(userData);
        const dietPlan = generateDietPlan(userData);

        displayResults(workoutPlan, dietPlan);
        fitnessForm.classList.add("hidden");
        resultsSection.classList.remove("hidden");
        generatePlanBtn.disabled = false;
        generatePlanBtn.innerHTML = 
            `<i class="fas fa-bullseye"></i> Gerar Meu Plano Personalizado`;
    });

    // Display results
    const displayResults = (workoutPlan, dietPlan) => {
        generatedForUser.textContent = `Plano gerado com sucesso para ${userData.name}`;

        // Workout Plan
        workoutPlanName.textContent = workoutPlan.name;
        workoutPlanDetails.innerHTML = workoutPlan.days.map(day => `
            <div class="day-card">
                <div class="day-card-header">
                    <h4 class="day-card-title"><i class="fas fa-calendar-alt"></i> ${day.day}</h4>
                </div>
                <div class="day-card-content">
                    ${day.exercises.map(exercise => `
                        <div class="exercise-item">
                            <i class="fas fa-running"></i>
                            <div>
                                <p>${exercise.name}</p>
                                <p class="sets-reps">${exercise.sets} séries de ${exercise.reps} repetições (${exercise.rest} descanso)</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Diet Plan
        dietPlanCalories.textContent = `${dietPlan.dailyCalories} calorias diárias`;
        dietPlanDetails.innerHTML = dietPlan.meals.map(meal => `
            <div class="meal-card">
                <div class="meal-card-header">
                    <h4 class="meal-card-title"><i class="fas fa-utensils"></i> ${meal.name} (${meal.time})</h4>
                </div>
                <div class="meal-card-content">
                    ${meal.foods.map(food => `
                        <div class="food-item">
                            <i class="fas fa-star"></i>
                            <span>${food}</span>
                        </div>
                    `).join('')}
                    <hr>
                    <p class="meal-calories">Calorias: ${meal.calories}</p>
                </div>
            </div>
        `).join('');

        // Tab switching logic
        const tabTriggers = document.querySelectorAll(".tab-trigger");
        const tabContents = document.querySelectorAll(".tab-content");

        tabTriggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                tabTriggers.forEach(t => t.classList.remove("active"));
                trigger.classList.add("active");

                tabContents.forEach(content => content.classList.add("hidden"));
                document.getElementById(`${trigger.dataset.tab}-tab`).classList.remove("hidden");
            });
        });
    };

    // Handle generate new plan button
    generateNewPlanBtn.addEventListener("click", () => {
        fitnessForm.classList.remove("hidden");
        resultsSection.classList.add("hidden");
        fitnessForm.reset(); // Clear form fields
        // Reset tab to workout
        document.querySelector(".tab-trigger[data-tab='workout']").click();
    });
});

