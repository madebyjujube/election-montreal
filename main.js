// Complete electoral district data (65 districts including special seats)
const electoralData = {
    mayor: {
        total_registered: 1111100,
        total_votes_cast: 425766,
        turnout_percentage: 38.32,
        candidates: [
            {name: "Valérie PLANTE", party: "Projet Montréal", votes: 217986, percentage: 52.14},
            {name: "Denis CODERRE", party: "Ensemble Montréal", votes: 158751, percentage: 37.97},
            {name: "Balarama HOLNESS", party: "Mouvement Montréal", votes: 30235, percentage: 7.23},
            {name: "Autres candidats", party: "Various", votes: 17794, percentage: 2.66}
        ]
    },
    districts: []
};

let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadElectoralData();
});

function loadElectoralData() {
    fetch('electoral_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(boroughsData => {
            // Flatten the nested structure from the JSON file
            const allDistricts = [];
            boroughsData.forEach(borough => {
                const boroughName = borough.borough;
                // Add each district from the borough, attaching the borough's name
                borough.districts.forEach(district => {
                    allDistricts.push({
                        ...district, // Spread all properties from the district object
                        borough: boroughName // Add the parent borough's name
                    });
                });
            });
            
            electoralData.districts = allDistricts;
            initializeApp();
        })
        .catch(error => {
            console.error('Error loading electoral data:', error);
            // Show error to user
            const container = document.getElementById('districtGrid');
            if (container) {
                container.innerHTML = '<div class="error-message">Erreur lors du chargement des données</div>';
            }
        });
}

function initializeApp() {
    renderMayorResults();
    renderDistrictGrid();
    setupFilters();
    setupSearch();
}

/**
 * Helper function to map full party names to simple CSS classes for styling.
 */
function getPartyClass(partyName) {
    const name = (partyName || 'Indépendant').toLowerCase();
    
    if (name.includes('projet montréal')) {
        return 'projetmontreal';
    }
    if (name.includes('ensemble montréal')) {
        return 'ensemblemontreal';
    }
    if (name.includes('mouvement montréal')) {
        return 'mouvementmontreal';
    }
    if (name.includes('équipe anjou')) {
        return 'equipeanjou';
    }
    if (name.includes('équipe lasalle')) {
        return 'equipelasalle';
    }
    if (name.includes('quartiers montréal')) {
        return 'quartiersmontreal';
    }
    if (name.includes('action montréal')) {
        return 'actionmontreal';
    }
    if (name.includes('courage')) {
        return 'courage';
    }
    if (name.includes('parti outremont')) {
        return 'partioutremont';
    }
    // Default/Independent
    return 'independant';
}

function renderMayorResults() {
    const container = document.getElementById('mayorResults');
    if (!container) {
        return;
    }
    
    const data = electoralData.mayor;
    container.innerHTML = '';
    
    data.candidates.forEach((candidate, index) => {
        const div = document.createElement('div');
        div.className = `mayor-candidate ${index === 0 ? 'winner' : ''}`;
        
        div.innerHTML = `
            <h3>${candidate.name}</h3>
            <p><strong>${candidate.party}</strong></p>
            <p style="font-size: 1.5rem; font-weight: 700;">${candidate.percentage}%</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">
                ${candidate.votes.toLocaleString()} votes
            </p>
            ${index === 0 ? '<p style="font-size: 1.2rem;">MEMBRE ÉLU</p>' : ''}
        `;
        
        container.appendChild(div);
    });
}

function renderDistrictGrid() {
    const container = document.getElementById('districtGrid');
    const totalDistrictsElement = document.getElementById('totalDistricts');
    
    if (!container) {
        return;
    }
    
    const data = electoralData.districts;
    container.innerHTML = '';
    
    let filteredData = data;
    
    // Apply party filter
    if (currentFilter !== 'all') {
        // --- THIS IS THE FIX ---
        // Convert the filter value (e.g., "Projet Montréal") to its class name (e.g., "projetmontreal")
        const filterPartyClass = getPartyClass(currentFilter);

        filteredData = data.filter(district => {
            if (!district.candidates || district.candidates.length === 0) {
                return false;
            }
            // Find the winner
            const winner = district.candidates.reduce((prev, current) => 
                (prev.percentage > current.percentage) ? prev : current
            );
            
            // Convert the winner's party (e.g., "Projet Montréal - Équipe Valérie Plante") to its class name
            const winnerPartyClass = getPartyClass(winner.party);
            
            // Now we can correctly compare the two class names
            return winnerPartyClass === filterPartyClass;
        });
        // --- END OF FIX ---
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredData = filteredData.filter(district => 
            district.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            (district.borough && district.borough.toLowerCase().includes(currentSearch.toLowerCase()))
        );
    }
    
    filteredData.forEach(district => {
        const card = document.createElement('div');
        card.className = 'district-card';
        
        // Sort candidates by percentage (highest first)
        const sortedCandidates = [...district.candidates].sort((a, b) => b.percentage - a.percentage);
        
        const candidatesHtml = sortedCandidates.map(candidate => {
            const partyName = candidate.party || 'Indépendant';
            // Use the helper function to get the correct CSS class
            const partyClass = getPartyClass(partyName); 
            return `
                <div class="candidate ${partyClass}">
                    <span>${partyName}</span>
                    <span class="percentage">${candidate.percentage}%</span>
                </div>
            `;
        }).join('');
        
        card.innerHTML = `
            <div class="district-header">
                <div class="district-name">${district.name}</div>
                <div class="district-borough">${district.borough}</div>
            </div>
            <div class="turnout">
                <i class="fas fa-users"></i> Participation: ${district.turnout_percentage}%
            </div>
            <div class="candidate-results">
                ${candidatesHtml}
            </div>
        `;
        
        // Add click event for interactivity
        card.addEventListener('click', () => {
            showDistrictDetails(district);
        });
        
        container.appendChild(card);
    });
    
    // Update stats only if element exists
    if (totalDistrictsElement) {
        totalDistrictsElement.textContent = filteredData.length;
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length === 0) {
        return;
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // The filter value is the full party name from the data-filter attribute
            currentFilter = button.dataset.filter;
            renderDistrictGrid();
        });
    });
}

function setupSearch() {
    const searchBox = document.getElementById('searchBox');
    if (!searchBox) {
        return;
    }
    
    searchBox.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderDistrictGrid();
    });
}

function showDistrictDetails(district) {
    // Ensure there are at least 2 candidates to calculate a margin
    if (!district.candidates || district.candidates.length === 0) {
        alert(`${district.name}\nArrondissement: ${district.borough}\n\n` +
            `Participation: ${district.turnout_percentage}%\n\n` +
            `Pas de données de candidats disponibles.`);
        return;
    }

    const sortedCandidates = [...district.candidates].sort((a, b) => b.percentage - a.percentage);
    
    const winner = sortedCandidates[0];
    let marginText = 'N/A';
    
    if (sortedCandidates.length > 1) {
        const secondPlace = sortedCandidates[1];
        const margin = winner.percentage - secondPlace.percentage;
        marginText = `${margin.toFixed(1)} points`;
    }

    alert(`${district.name}\nArrondissement: ${district.borough}\n\n` +
            `Participation: ${district.turnout_percentage}%\n\n` +
            `Gagnant: ${winner.party || 'Indépendant'} (${winner.percentage}%)\n` +
            `Majorité: ${marginText}\n\n` +
            `Cliquez pour voir les détails complets du district.`);
}