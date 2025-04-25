import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Se o ícone estiver na pasta 'public', não é necessário importar diretamente
const Map = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Posição inicial
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para obter a localização do usuário
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Carregando o mapa...</div>;
  }

  // Criar o ícone customizado importando o SVG
  const customIcon = new L.Icon({
    iconUrl: '/Localizacao.svg', // O arquivo SVG precisa estar na pasta public
    iconSize: [25, 41],
    iconAnchor: [12, 41],  // O ponto de ancoragem está no fundo do ícone
    popupAnchor: [0, -34],
  });

  // Lista de marcadores próximos à localização (exemplo)
  const markers = [
    { lat: position[0] + 0.01, lon: position[1] + 0.01, name: 'Marcador 1' },
    { lat: position[0] - 0.01, lon: position[1] - 0.01, name: 'Marcador 2' },
  ];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "11rem", width: "21rem", borderRadius: "10px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Sua localização</Popup>
      </Marker>

      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]} icon={customIcon}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
