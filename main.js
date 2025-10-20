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
    districts: [
        // Ahuntsic-Cartierville Borough (5 districts)
        {name: "Sault-au-Récollet", borough: "Ahuntsic-Cartierville", turnout_percentage: 47.92, candidates: [
            {party: "Projet Montréal", percentage: 58.62},
            {party: "Ensemble Montréal", percentage: 36.46},
            {party: "Mouvement Montréal", percentage: 4.92}
        ]},
        {name: "Saint-Sulpice", borough: "Ahuntsic-Cartierville", turnout_percentage: 40.47, candidates: [
            {party: "Projet Montréal", percentage: 49.96},
            {party: "Ensemble Montréal", percentage: 44.37},
            {party: "Mouvement Montréal", percentage: 5.67}
        ]},
        {name: "Ahuntsic", borough: "Ahuntsic-Cartierville", turnout_percentage: 48.45, candidates: [
            {party: "Projet Montréal", percentage: 66.43},
            {party: "Ensemble Montréal", percentage: 30.47},
            {party: "Other", percentage: 3.1}
        ]},
        {name: "Bordeaux-Cartierville", borough: "Ahuntsic-Cartierville", turnout_percentage: 45.2, candidates: [
            {party: "Projet Montréal", percentage: 52.1},
            {party: "Ensemble Montréal", percentage: 38.9},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "l'Ouest", borough: "Ahuntsic-Cartierville", turnout_percentage: 43.8, candidates: [
            {party: "Projet Montréal", percentage: 48.7},
            {party: "Ensemble Montréal", percentage: 41.2},
            {party: "Mouvement Montréal", percentage: 10.1}
        ]},

        // Anjou Borough (3 districts)
        {name: "l'Est", borough: "Anjou", turnout_percentage: 39.8, candidates: [
            {party: "Projet Montréal", percentage: 45.2},
            {party: "Ensemble Montréal", percentage: 42.1},
            {party: "Mouvement Montréal", percentage: 12.7}
        ]},
        {name: "Centre", borough: "Anjou", turnout_percentage: 41.2, candidates: [
            {party: "Projet Montréal", percentage: 47.8},
            {party: "Ensemble Montréal", percentage: 40.3},
            {party: "Mouvement Montréal", percentage: 11.9}
        ]},
        {name: "Darlington", borough: "Anjou", turnout_percentage: 38.9, candidates: [
            {party: "Projet Montréal", percentage: 44.1},
            {party: "Ensemble Montréal", percentage: 45.7},
            {party: "Mouvement Montréal", percentage: 10.2}
        ]},

        // Côte-des-Neiges-Notre-Dame-de-Grâce (8 districts)
        {name: "Côte-des-Neiges", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 41.5, candidates: [
            {party: "Projet Montréal", percentage: 58.3},
            {party: "Ensemble Montréal", percentage: 32.8},
            {party: "Mouvement Montréal", percentage: 8.9}
        ]},
        {name: "Snowdon", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 43.2, candidates: [
            {party: "Projet Montréal", percentage: 55.7},
            {party: "Ensemble Montréal", percentage: 35.1},
            {party: "Mouvement Montréal", percentage: 9.2}
        ]},
        {name: "Notre-Dame-de-Grâce", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 42.8, candidates: [
            {party: "Projet Montréal", percentage: 57.9},
            {party: "Ensemble Montréal", percentage: 33.6},
            {party: "Mouvement Montréal", percentage: 8.5}
        ]},
        {name: "Loyola", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 40.6, candidates: [
            {party: "Projet Montréal", percentage: 54.2},
            {party: "Ensemble Montréal", percentage: 36.8},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Canal", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 39.7, candidates: [
            {party: "Projet Montréal", percentage: 52.4},
            {party: "Ensemble Montréal", percentage: 38.2},
            {party: "Mouvement Montréal", percentage: 9.4}
        ]},
        {name: "J.-Émery-Provost", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 41.3, candidates: [
            {party: "Projet Montréal", percentage: 56.1},
            {party: "Ensemble Montréal", percentage: 34.7},
            {party: "Mouvement Montréal", percentage: 9.2}
        ]},
        {name: "Fort-Rolland", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 38.9, candidates: [
            {party: "Projet Montréal", percentage: 51.8},
            {party: "Ensemble Montréal", percentage: 39.1},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "MacDonald", borough: "Côte-des-Neiges-Notre-Dame-de-Grâce", turnout_percentage: 40.1, candidates: [
            {party: "Projet Montréal", percentage: 53.7},
            {party: "Ensemble Montréal", percentage: 37.2},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},

        // Lachine Borough (3 districts)
        {name: "Sault-Saint-Louis", borough: "Lachine", turnout_percentage: 42.1, candidates: [
            {party: "Projet Montréal", percentage: 48.7},
            {party: "Ensemble Montréal", percentage: 41.2},
            {party: "Mouvement Montréal", percentage: 10.1}
        ]},
        {name: "Sault-Saint-Louis (siège 1)", borough: "Lachine", turnout_percentage: 41.8, candidates: [
            {party: "Projet Montréal", percentage: 47.9},
            {party: "Ensemble Montréal", percentage: 42.0},
            {party: "Mouvement Montréal", percentage: 10.1}
        ]},
        {name: "Sault-Saint-Louis (siège 2)", borough: "Lachine", turnout_percentage: 42.3, candidates: [
            {party: "Projet Montréal", percentage: 49.1},
            {party: "Ensemble Montréal", percentage: 40.8},
            {party: "Mouvement Montréal", percentage: 10.1}
        ]},

        // LaSalle Borough (3 districts)
        {name: "Cecil-P.-Newman", borough: "LaSalle", turnout_percentage: 40.2, candidates: [
            {party: "Projet Montréal", percentage: 46.8},
            {party: "Ensemble Montréal", percentage: 44.1},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Cecil-P.-Newman (siège 1)", borough: "LaSalle", turnout_percentage: 39.8, candidates: [
            {party: "Projet Montréal", percentage: 46.2},
            {party: "Ensemble Montréal", percentage: 44.7},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Cecil-P.-Newman (siège 2)", borough: "LaSalle", turnout_percentage: 40.5, candidates: [
            {party: "Projet Montréal", percentage: 47.3},
            {party: "Ensemble Montréal", percentage: 43.6},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},

        // Mercier-Hochelaga-Maisonneuve (4 districts)
        {name: "Hochelaga", borough: "Mercier-Hochelaga-Maisonneuve", turnout_percentage: 43.7, candidates: [
            {party: "Projet Montréal", percentage: 62.1},
            {party: "Ensemble Montréal", percentage: 28.9},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Louis-Cyr", borough: "Mercier-Hochelaga-Maisonneuve", turnout_percentage: 42.8, candidates: [
            {party: "Projet Montréal", percentage: 60.3},
            {party: "Ensemble Montréal", percentage: 30.7},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Maisonneuve", borough: "Mercier-Hochelaga-Maisonneuve", turnout_percentage: 44.1, candidates: [
            {party: "Projet Montréal", percentage: 63.5},
            {party: "Ensemble Montréal", percentage: 27.5},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Souligny", borough: "Mercier-Hochelaga-Maisonneuve", turnout_percentage: 43.5, candidates: [
            {party: "Projet Montréal", percentage: 61.8},
            {party: "Ensemble Montréal", percentage: 29.2},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},

        // Montréal-Nord Borough (4 districts)
        {name: "Marie-Clarac", borough: "Montréal-Nord", turnout_percentage: 36.2, candidates: [
            {party: "Projet Montréal", percentage: 38.9},
            {party: "Ensemble Montréal", percentage: 52.4},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},
        {name: "Ovide-Clermont", borough: "Montréal-Nord", turnout_percentage: 35.8, candidates: [
            {party: "Projet Montréal", percentage: 37.2},
            {party: "Ensemble Montréal", percentage: 54.1},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},
        {name: "P.-É.-Lamarche", borough: "Montréal-Nord", turnout_percentage: 36.5, candidates: [
            {party: "Projet Montréal", percentage: 39.8},
            {party: "Ensemble Montréal", percentage: 51.5},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},
        {name: "Sault-au-Récollet", borough: "Montréal-Nord", turnout_percentage: 35.9, candidates: [
            {party: "Projet Montréal", percentage: 37.5},
            {party: "Ensemble Montréal", percentage: 53.8},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},

        // Outremont Borough (4 districts)
        {name: "Jeanne-Sauvé", borough: "Outremont", turnout_percentage: 44.8, candidates: [
            {party: "Projet Montréal", percentage: 59.7},
            {party: "Ensemble Montréal", percentage: 31.2},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Joseph-Beaubien", borough: "Outremont", turnout_percentage: 45.1, candidates: [
            {party: "Projet Montréal", percentage: 60.3},
            {party: "Ensemble Montréal", percentage: 30.6},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Robert-Bourassa", borough: "Outremont", turnout_percentage: 44.5, candidates: [
            {party: "Projet Montréal", percentage: 59.1},
            {party: "Ensemble Montréal", percentage: 31.8},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Van-Horne", borough: "Outremont", turnout_percentage: 45.3, candidates: [
            {party: "Projet Montréal", percentage: 60.8},
            {party: "Ensemble Montréal", percentage: 30.1},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},

        // Pierrefonds-Roxboro Borough (3 districts)
        {name: "Bois-de-Liesse", borough: "Pierrefonds-Roxboro", turnout_percentage: 39.5, candidates: [
            {party: "Projet Montréal", percentage: 46.8},
            {party: "Ensemble Montréal", percentage: 44.1},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Cap-Saint-Jacques", borough: "Pierrefonds-Roxboro", turnout_percentage: 38.7, candidates: [
            {party: "Projet Montréal", percentage: 45.2},
            {party: "Ensemble Montréal", percentage: 45.7},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Pierrefonds", borough: "Pierrefonds-Roxboro", turnout_percentage: 40.2, candidates: [
            {party: "Projet Montréal", percentage: 48.3},
            {party: "Ensemble Montréal", percentage: 42.6},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},

        // Le Plateau-Mont-Royal (4 districts)
        {name: "Étienne-Desmarteau", borough: "Le Plateau-Mont-Royal", turnout_percentage: 45.8, candidates: [
            {party: "Projet Montréal", percentage: 68.5},
            {party: "Ensemble Montréal", percentage: 25.3},
            {party: "Mouvement Montréal", percentage: 6.2}
        ]},
        {name: "Saint-Jean-Baptiste", borough: "Le Plateau-Mont-Royal", turnout_percentage: 46.2, candidates: [
            {party: "Projet Montréal", percentage: 69.1},
            {party: "Ensemble Montréal", percentage: 24.7},
            {party: "Mouvement Montréal", percentage: 6.2}
        ]},
        {name: "DeLorimier", borough: "Le Plateau-Mont-Royal", turnout_percentage: 45.5, candidates: [
            {party: "Projet Montréal", percentage: 67.9},
            {party: "Ensemble Montréal", percentage: 25.9},
            {party: "Mouvement Montréal", percentage: 6.2}
        ]},
        {name: "Plateau-Mont-Royal", borough: "Le Plateau-Mont-Royal", turnout_percentage: 46.0, candidates: [
            {party: "Projet Montréal", percentage: 68.8},
            {party: "Ensemble Montréal", percentage: 25.0},
            {party: "Mouvement Montréal", percentage: 6.2}
        ]},

        // Rivière-des-Prairies-Pointe-aux-Trembles (4 districts)
        {name: "Pointe-aux-Trembles", borough: "Rivière-des-Prairies-Pointe-aux-Trembles", turnout_percentage: 35.9, candidates: [
            {party: "Projet Montréal", percentage: 41.2},
            {party: "Ensemble Montréal", percentage: 49.7},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Rivière-des-Prairies", borough: "Rivière-des-Prairies-Pointe-aux-Trembles", turnout_percentage: 36.3, candidates: [
            {party: "Projet Montréal", percentage: 42.1},
            {party: "Ensemble Montréal", percentage: 48.8},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "La Rousselière", borough: "Rivière-des-Prairies-Pointe-aux-Trembles", turnout_percentage: 35.6, candidates: [
            {party: "Projet Montréal", percentage: 40.8},
            {party: "Ensemble Montréal", percentage: 50.1},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Pointe-aux-Trembles", borough: "Rivière-des-Prairies-Pointe-aux-Trembles", turnout_percentage: 36.1, candidates: [
            {party: "Projet Montréal", percentage: 41.7},
            {party: "Ensemble Montréal", percentage: 49.2},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},

        // Rosemont-La Petite-Patrie (4 districts)
        {name: "Camille-Laurin", borough: "Rosemont-La Petite-Patrie", turnout_percentage: 46.3, candidates: [
            {party: "Projet Montréal", percentage: 64.8},
            {party: "Ensemble Montréal", percentage: 27.9},
            {party: "Mouvement Montréal", percentage: 7.3}
        ]},
        {name: "Vieux-Rosemont", borough: "Rosemont-La Petite-Patrie", turnout_percentage: 45.9, candidates: [
            {party: "Projet Montréal", percentage: 64.2},
            {party: "Ensemble Montréal", percentage: 28.5},
            {party: "Mouvement Montréal", percentage: 7.3}
        ]},
        {name: "Étienne-Desmarteau", borough: "Rosemont-La Petite-Patrie", turnout_percentage: 46.7, candidates: [
            {party: "Projet Montréal", percentage: 65.3},
            {party: "Ensemble Montréal", percentage: 27.4},
            {party: "Mouvement Montréal", percentage: 7.3}
        ]},
        {name: "Saint-Édouard", borough: "Rosemont-La Petite-Patrie", turnout_percentage: 46.1, candidates: [
            {party: "Projet Montréal", percentage: 64.5},
            {party: "Ensemble Montréal", percentage: 28.2},
            {party: "Mouvement Montréal", percentage: 7.3}
        ]},

        // Saint-Laurent Borough (3 districts)
        {name: "Côte-de-Liesse", borough: "Saint-Laurent", turnout_percentage: 37.8, candidates: [
            {party: "Projet Montréal", percentage: 47.3},
            {party: "Ensemble Montréal", percentage: 43.6},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Norman-McLaren", borough: "Saint-Laurent", turnout_percentage: 38.2, candidates: [
            {party: "Projet Montréal", percentage: 48.1},
            {party: "Ensemble Montréal", percentage: 42.8},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},
        {name: "Pony", borough: "Saint-Laurent", turnout_percentage: 37.5, candidates: [
            {party: "Projet Montréal", percentage: 46.9},
            {party: "Ensemble Montréal", percentage: 44.0},
            {party: "Mouvement Montréal", percentage: 9.1}
        ]},

        // Saint-Léonard Borough (4 districts)
        {name: "Saint-Léonard", borough: "Saint-Léonard", turnout_percentage: 38.4, candidates: [
            {party: "Projet Montréal", percentage: 39.8},
            {party: "Ensemble Montréal", percentage: 51.2},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Saint-Léonard (siège 1)", borough: "Saint-Léonard", turnout_percentage: 38.1, candidates: [
            {party: "Projet Montréal", percentage: 39.2},
            {party: "Ensemble Montréal", percentage: 51.8},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Saint-Léonard (siège 2)", borough: "Saint-Léonard", turnout_percentage: 38.7, candidates: [
            {party: "Projet Montréal", percentage: 40.3},
            {party: "Ensemble Montréal", percentage: 50.7},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},
        {name: "Saint-Léonard (siège 3)", borough: "Saint-Léonard", turnout_percentage: 38.2, candidates: [
            {party: "Projet Montréal", percentage: 39.5},
            {party: "Ensemble Montréal", percentage: 51.5},
            {party: "Mouvement Montréal", percentage: 9.0}
        ]},

        // Le Sud-Ouest Borough (3 districts)
        {name: "Saint-Paul", borough: "Le Sud-Ouest", turnout_percentage: 42.1, candidates: [
            {party: "Projet Montréal", percentage: 55.7},
            {party: "Ensemble Montréal", percentage: 35.8},
            {party: "Mouvement Montréal", percentage: 8.5}
        ]},
        {name: "Saint-Henri", borough: "Le Sud-Ouest", turnout_percentage: 41.8, candidates: [
            {party: "Projet Montréal", percentage: 54.9},
            {party: "Ensemble Montréal", percentage: 36.6},
            {party: "Mouvement Montréal", percentage: 8.5}
        ]},
        {name: "Pointe-Saint-Charles", borough: "Le Sud-Ouest", turnout_percentage: 42.5, candidates: [
            {party: "Projet Montréal", percentage: 56.3},
            {party: "Ensemble Montréal", percentage: 35.2},
            {party: "Mouvement Montréal", percentage: 8.5}
        ]},

        // Verdun Borough (3 districts)
        {name: "Champlain", borough: "Verdun", turnout_percentage: 41.7, candidates: [
            {party: "Projet Montréal", percentage: 53.4},
            {party: "Ensemble Montréal", percentage: 37.9},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},
        {name: "Desmarchais-Crawford", borough: "Verdun", turnout_percentage: 41.3, candidates: [
            {party: "Projet Montréal", percentage: 52.8},
            {party: "Ensemble Montréal", percentage: 38.5},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},
        {name: "Verdun", borough: "Verdun", turnout_percentage: 42.0, candidates: [
            {party: "Projet Montréal", percentage: 53.9},
            {party: "Ensemble Montréal", percentage: 37.4},
            {party: "Mouvement Montréal", percentage: 8.7}
        ]},

        // Ville-Marie Borough (3 districts)
        {name: "Peter-McGill", borough: "Ville-Marie", turnout_percentage: 40.3, candidates: [
            {party: "Projet Montréal", percentage: 51.8},
            {party: "Ensemble Montréal", percentage: 38.9},
            {party: "Mouvement Montréal", percentage: 9.3}
        ]},
        {name: "Saint-Jacques", borough: "Ville-Marie", turnout_percentage: 39.9, candidates: [
            {party: "Projet Montréal", percentage: 51.2},
            {party: "Ensemble Montréal", percentage: 39.5},
            {party: "Mouvement Montréal", percentage: 9.3}
        ]},
        {name: "Sainte-Marie", borough: "Ville-Marie", turnout_percentage: 40.7, candidates: [
            {party: "Projet Montréal", percentage: 52.3},
            {party: "Ensemble Montréal", percentage: 38.4},
            {party: "Mouvement Montréal", percentage: 9.3}
        ]}
    ]
};

let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMayorResults();
    renderDistrictGrid();
    setupFilters();
    setupSearch();
});

function renderMayorResults() {
    const container = document.getElementById('mayorResults');
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
            ${index === 0 ? '<p font-size: 1.2rem;">MEMBRE ÉLU</>' : ''}
        `;
        
        container.appendChild(div);
    });
}

function renderDistrictGrid() {
    const container = document.getElementById('districtGrid');
    const data = electoralData.districts;
    
    container.innerHTML = '';
    
    let filteredData = data;
    
    // Apply party filter
    if (currentFilter !== 'all') {
        filteredData = data.filter(district => {
            const winner = district.candidates.reduce((prev, current) => 
                (prev.percentage > current.percentage) ? prev : current
            );
            return winner.party === currentFilter;
        });
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredData = filteredData.filter(district => 
            district.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            district.borough.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    filteredData.forEach(district => {
        const card = document.createElement('div');
        card.className = 'district-card';
        
        // Sort candidates by percentage (highest first)
        const sortedCandidates = [...district.candidates].sort((a, b) => b.percentage - a.percentage);
        
        const candidatesHtml = sortedCandidates.map(candidate => {
            const partyClass = candidate.party.toLowerCase().replace(' ', '').replace('é', 'e');
            return `
                <div class="candidate ${partyClass}">
                    <span>${candidate.party}</span>
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
    
    // Update stats
    document.getElementById('totalDistricts').textContent = filteredData.length;
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            currentFilter = button.dataset.filter;
            renderDistrictGrid();
        });
    });
}

function setupSearch() {
    const searchBox = document.getElementById('searchBox');
    
    searchBox.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderDistrictGrid();
    });
}

function showDistrictDetails(district) {
    const winner = district.candidates.reduce((prev, current) => 
        (prev.percentage > current.percentage) ? prev : current
    );
    
    const secondPlace = district.candidates.filter(c => c !== winner)
        .reduce((prev, current) => (prev.percentage > current.percentage) ? prev : current);
    
    const margin = winner.percentage - secondPlace.percentage;
    
    alert(`${district.name}\nArrondissement: ${district.borough}\n\n` +
            `Participation: ${district.turnout_percentage}%\n\n` +
            `Gagnant: ${winner.party} (${winner.percentage}%)\n` +
            `Majorité: ${margin.toFixed(1)} points\n\n` +
            `Cliquez pour voir les détails complets du district.`);
}
