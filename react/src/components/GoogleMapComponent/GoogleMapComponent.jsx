import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import styles from "./CompanyMap.module.scss";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import Overlay from "ol/Overlay";
import { FiCopy } from "react-icons/fi";

const redPin = "https://cdn-icons-png.flaticon.com/512/684/684908.png";

const BhaktaBuildersLocation = {
  lat: 51.51418,
  lng: -0.34438,
};

const CompanyMap = () => {
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const address = "1 Spring Court, London, W73BX";

  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

    const location = fromLonLat([BhaktaBuildersLocation.lng, BhaktaBuildersLocation.lat]);

    const marker = new Feature({
      geometry: new Point(location),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: redPin,
          scale: 0.08,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    const overlay = new Overlay({
      element: popupRef.current,
      positioning: "bottom-center",
      stopEvent: false,
      offset: [0, -35],
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer,
      ],
      overlays: [overlay],
      view: new View({ center: location, zoom: 16 }),
    });

    overlay.setPosition(location);

    // Attach native click listener to popup (works reliably with OL)
    const popupEl = popupRef.current;
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };
    popupEl.addEventListener("click", handleCopy);

    return () => {
      map.setTarget(null);
      popupEl.removeEventListener("click", handleCopy);
    };
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.map} ref={mapRef}></div>
      <div ref={popupRef} className={styles.popup}>
        <span className={styles.copyText}>{address}</span>
        <FiCopy className={styles.copyIcon} style={{ marginLeft: 4 }} />
        {copied && <span style={{ marginLeft: 6, fontSize: 12 }}>Copied!</span>}
      </div>
    </div>
  );
};

export default CompanyMap;