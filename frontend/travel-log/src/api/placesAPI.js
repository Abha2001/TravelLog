const API_URL="http://localhost:8000"

const placesList = async ()=>{
    const places= await fetch(`${API_URL}/logs`);
    return places.json();
}

export default placesList;