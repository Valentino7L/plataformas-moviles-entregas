// script.js - simple, claro y funcional
const API_BASE = 'https://pokeapi.co/api/v2';
const listaPokemons = document.getElementById('listaPokemons');
const detalleModalEl = document.getElementById('detalleModal');
const modal = new bootstrap.Modal(detalleModalEl);
const modalTitle = document.getElementById('modalTitle');
const modalBodyContent = document.getElementById('modalBodyContent');
const loadingText = document.getElementById('loadingText');

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error en la petición');
  return res.json();
}

// Carga de los primeros 151 pokémon (solo nombres + url de detalle)
async function loadFirst151() {
  try {
    const data = await fetchJSON(`${API_BASE}/pokemon?limit=151`);
    listaPokemons.innerHTML = ''; // limpiar
    data.results.forEach((p, index) => {
      const item = document.createElement('div');
      item.className = 'list-group-item d-flex justify-content-between align-items-center';
      item.innerHTML = `
        <div>
          <strong>#${index + 1}</strong> ${p.name}
        </div>
        <div>
          <button class="btn btn-sm btn-primary ver-btn" data-url="${p.url}">Ver</button>
        </div>
      `;
      listaPokemons.appendChild(item);
    });

    // Delegación de evento para los botones "Ver"
    listaPokemons.addEventListener('click', async (e) => {
      if (e.target && e.target.matches('.ver-btn')) {
        const url = e.target.getAttribute('data-url');
        await showPokemonDetail(url);
      }
    });

  } catch (err) {
    listaPokemons.innerHTML = `<div class="text-danger p-3">No se pudieron cargar los pokémon. ${err.message}</div>`;
    console.error(err);
  }
}

async function showPokemonDetail(url) {
  // Abrir modal y mostrar cargando
  modalTitle.textContent = "Cargando...";
  modalBodyContent.innerHTML = "<p>Cargando...</p>";
  modal.show();

  try {
    const p = await fetchJSON(url);

    // Datos principales
    const name = p.name;
    const img = p.sprites.front_default;
    const tipos = p.types.map(t => t.type.name).join(", ");
    const habilidad = p.abilities[0].ability.name;
    const movimientos = p.moves.slice(0, 4).map(m => m.move.name).join(", ");

    // Mostrar en el modal
    modalTitle.textContent = `#${p.id} - ${name}`;
    modalBodyContent.innerHTML = `
      <img src="${img}" alt="${name}" class="pokemon-img">
      <p><strong>Tipos:</strong> ${tipos}</p>
      <p><strong>Habilidad:</strong> ${habilidad}</p>
      <p><strong>Movimientos:</strong> ${movimientos}</p>
    `;

  } catch (err) {
    modalTitle.textContent = "Error";
    modalBodyContent.innerHTML = "<p>No se pudo cargar el Pokémon.</p>";
  }
}


// Iniciar
loadFirst151();