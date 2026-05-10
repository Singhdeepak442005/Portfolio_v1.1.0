import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { CertificateInfo, certificateData, getCertificateKey } from "../../utils/certificateData";

const Open: React.FC = () => {
  const { history, showModal, setShowModal, selectedCertificate, setSelectedCertificate } = useContext(termContext);
  const [certData, setCertData] = useState<CertificateInfo | null>(null);

  const currentCommand = _.split(history[history.length - 1] || "", " ");
  const command = currentCommand[0];
  const certificateName = currentCommand.slice(1).join(" ").toLowerCase();

  useEffect(() => {
    if (selectedCertificate) {
      const data = certificateData[selectedCertificate];
      setCertData(data ?? null);
      if (data && setShowModal) {
        setShowModal(true);
      }
    } else if (command === "open" && certificateName) {
      const matchKey = getCertificateKey(certificateName);
      const data = matchKey ? certificateData[matchKey] : null;
      setCertData(data ?? null);
      if (data && setShowModal) {
        setShowModal(true);
      }
    } else {
      setCertData(null);
    }
  }, [selectedCertificate, command, certificateName, setShowModal]);

  const handleCloseModal = () => {
    setShowModal?.(false);
    setSelectedCertificate?.(null);
    setCertData(null);
  };

  if (!showModal || !certData) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        animation: "fadeIn 0.25s ease-in-out",
      }}
    >
      <div
        style={{
          backgroundColor: "#111",
          border: "2px solid #00FF88",
          borderRadius: "14px",
          padding: "24px",
          width: "min(92vw, 860px)",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 0 40px rgba(0, 255, 136, 0.25)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "18px",
            cursor: "pointer",
            color: "#00FF88",
            fontSize: "28px",
            fontWeight: "900",
          }}
          onClick={handleCloseModal}
        >
          ×
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#00FF88",
            fontSize: "1.25rem",
            fontWeight: "800",
          }}
        >
          🏆 Certificate Viewer
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "14px",
            color: "#E9ECEF",
            fontSize: "1.1rem",
            fontWeight: "700",
          }}
        >
          {certData.name}
        </div>
        <div
          style={{
            marginBottom: "22px",
            color: "#7FDBFF",
            lineHeight: "1.7",
            textAlign: "center",
          }}
        >
          {certData.description}
        </div>
        <div
          style={{
            border: "2px solid #00FF88",
            borderRadius: "12px",
            padding: "14px",
            backgroundColor: "#0b0b0b",
            marginBottom: "22px",
            textAlign: "center",
          }}
        >
          <img
            src={certData.image}
            alt={certData.name}
            style={{
              maxWidth: "100%",
              maxHeight: "62vh",
              borderRadius: "8px",
              boxShadow: "0 0 24px rgba(0, 255, 136, 0.15)",
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div style="padding: 40px; color: #7FDBFF; text-align: center;">
                    📄 Certificate Image<br/>
                    <span style="font-size: 0.9rem; color: #ADB5BD;">${certData.image}</span>
                    <br/><br/>
                    <span style="font-size: 0.8rem; color: #6C757D; font-style: italic;">
                      * Certificate image not found - please ensure the file exists in /public/certificate/
                    </span>
                  </div>
                `;
              }
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#00FF88",
            fontSize: "0.95rem",
          }}
        >
          Issued by: Cybersecurity Certification Authority<br />
          Valid: Lifetime Certification
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleCloseModal}
            style={{
              backgroundColor: "#00FF88",
              color: "#000",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "700",
              marginRight: "12px",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Open;
