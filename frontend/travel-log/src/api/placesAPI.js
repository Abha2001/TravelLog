const API_URL="http://localhost:8000"

export const placesList = async ()=>{
    const places= await fetch(`${API_URL}/logs`);
    return places.json();
}

export const addEntry = async (data)=>{
    const places= await fetch(`${API_URL}/logs`,
    {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    });
    return places.json();
}
