import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useSensors = (sensorId = null) => {
  const [locations, setLocations] = useState({});
  const [currentValue, setCurrentValue] = useState(null);
  const [history, setHistory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ubicacionesRef = ref(db, 'ubicacionesSensores');
    onValue(ubicacionesRef, (snapshot) => {
      setLocations(snapshot.val() || {});
      setLoading(false);
    });

    if (sensorId) {
      const valorActualRef = ref(db, `valorActual/${sensorId}`);
      onValue(valorActualRef, (snapshot) => {
        setCurrentValue(snapshot.val());
      });

      const historialRef = ref(db, `valoresHistoricos/${sensorId}`);
      onValue(historialRef, (snapshot) => {
        setHistory(snapshot.val() || {});
      });
    }
  }, [sensorId]);

  return { locations, currentValue, history, loading };
};
