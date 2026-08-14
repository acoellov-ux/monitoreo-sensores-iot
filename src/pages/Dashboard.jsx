import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSensors } from '../hooks/useSensors';

export const Dashboard = () => {
  const { sensorId } = useParams();
  const { locations, currentValue, history } = useSensors(sensorId);

  const sensorInfo = locations[sensorId] || {};

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f0', paddingBottom: '40px' }}>
      {/* Barra Superior */}
      <header style={{
        backgroundColor: '#1c3b2b', color: '#fff', padding: '12px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#4edf84' }}>●</span> UTEQ Sensor Monitor
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', borderBottom: '2px solid #4edf84' }}>Ubicaciones</Link>
        </nav>
      </header>

      {/* Contenido Principal */}
      <main style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px', textAlign: 'center' }}>
        <span style={{ fontSize: '11px', letterSpacing: '1.5px', color: '#718096', textTransform: 'uppercase' }}>
          {sensorInfo.campus || 'CAMPUS LA MARÍA - UTEQ'}
        </span>
        <h1 style={{ color: '#1a202c', margin: '5px 0 0 0', fontSize: '28px', textTransform: 'uppercase' }}>
          {sensorInfo.nombre || 'COELLO VINCES ALEJANDRO ANTONIO'}
        </h1>
        <p style={{ color: '#718096', margin: '5px 0 15px 0', fontSize: '14px' }}>
          {sensorInfo.zona || 'Laboratorios de campo - Sector 6'}
        </p>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#e53e3e', fontWeight: 'bold', marginBottom: '25px' }}>
          ● {sensorInfo.estado ? sensorInfo.estado.toUpperCase() : 'EN LÍNEA'}
        </div>

        {/* Tarjetas de Métricas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '15px' }}>
          {/* Temperatura */}
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
            <span style={{ fontSize: '11px', color: '#a0aec0', letterSpacing: '1px', textTransform: 'uppercase' }}>TEMPERATURA</span>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#2d3748', marginTop: '8px' }}>
              🌡️ {currentValue?.temperatura ?? '--'} °C
            </div>
          </div>

          {/* Humedad */}
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
            <span style={{ fontSize: '11px', color: '#a0aec0', letterSpacing: '1px', textTransform: 'uppercase' }}>HUMEDAD</span>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#3182ce', marginTop: '8px' }}>
              💧 {currentValue?.humedad ?? '--'} %
            </div>
          </div>

          {/* Presión */}
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
            <span style={{ fontSize: '11px', color: '#a0aec0', letterSpacing: '1px', textTransform: 'uppercase' }}>PRESIÓN ATMOSFÉRICA</span>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#2f855a', marginTop: '8px' }}>
              📊 {currentValue?.presionAtmosferica ?? '--'} hPa
            </div>
          </div>
        </div>

        {/* FECHA Y HORA DE ACTUALIZACIÓN AGREGADA AQUÍ */}
        <p style={{ fontSize: '13px', color: '#718096', margin: '15px 0 5px 0' }}>
          <strong>Última actualización:</strong> {currentValue?.timestamp ? new Date(currentValue.timestamp).toLocaleString() : '12 ago 2026, 08:30:00 a. m.'}
        </p>

        <p style={{ fontSize: '12px', color: '#a0aec0', marginBottom: '35px' }}>
          Identificador: {sensorId}
        </p>

        {/* Historial */}
        <h3 style={{ textAlign: 'left', fontSize: '18px', color: '#2d3748', marginBottom: '15px' }}>Historial de mediciones</h3>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ backgroundColor: '#faf5e8', borderBottom: '1px solid #edf2f7' }}>
                <th style={{ padding: '12px 20px', color: '#718096' }}>FECHA Y HORA</th>
                <th style={{ padding: '12px 20px', color: '#718096' }}>TEMPERATURA</th>
                <th style={{ padding: '12px 20px', color: '#718096' }}>HUMEDAD</th>
                <th style={{ padding: '12px 20px', color: '#718096' }}>PRESIÓN</th>
              </tr>
            </thead>
            <tbody>
              {history && Object.keys(history).length > 0 ? (
                Object.entries(history).map(([key, val]) => (
                  <tr key={key} style={{ borderBottom: '1px solid #edf2f7' }}>
                    <td style={{ padding: '12px 20px', color: '#718096' }}>{val.fecha || key}</td>
                    <td style={{ padding: '12px 20px', color: '#dd6b20' }}>{val.temperatura} °C</td>
                    <td style={{ padding: '12px 20px', color: '#3182ce' }}>{val.humedad} %</td>
                    <td style={{ padding: '12px 20px', color: '#38a169' }}>{val.presionAtmosferica} hPa</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#a0aec0' }}>No hay registros históricos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '25px' }}>
          <Link to="/" style={{ color: '#718096', textDecoration: 'none', fontSize: '13px' }}>← Volver a Ubicaciones</Link>
        </div>
      </main>
    </div>
  );
};
