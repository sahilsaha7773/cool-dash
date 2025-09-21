import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import classNames from 'classnames';
import styles from './styles.module.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const locationData = [
  { name: 'New York', revenue: 72, coordinates: [-74.006, 40.7128] },
  { name: 'San Francisco', revenue: 39, coordinates: [-122.4194, 37.7749] },
  { name: 'Singapore', revenue: 61, coordinates: [103.8198, 1.3521] },
  { name: 'Sydney', revenue: 25, coordinates: [151.2093, -33.8688] },
];

const RevenueByLocationCard = ({ theme }) => {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.title}>Revenue by Location</div>

      <div className={styles.mapContainer}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 35,
            center: [0, 40],
          }}
          width={300}
          height={150}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  fill="var(--map-fill-color)"
                  geography={geo}
                  stroke="var(--map-stroke-color)"
                  strokeWidth={0.5}
                />
              ))
            }
          </Geographies>
          {locationData.map((location, index) => (
            <Marker key={index} coordinates={location.coordinates}>
              <circle r={2.5} fill="var(--marker-color)" />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className={styles.locationList}>
        {locationData.map((location, index) => (
          <div key={index} className={styles.locationItem}>
            <div className={styles.locationNameContainer}>
              <div className={styles.locationName}>{location.name}</div>
              <div className={styles.revenueValue}>{location.revenue}K</div>
            </div>
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${(location.revenue / Math.max(...locationData.map((l) => l.revenue))) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocationCard;
