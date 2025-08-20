import React from "react";

export default function GridCard({ item }) {
  return (
    <article className="card" aria-labelledby={`title-${item.id}`}>
      <div
        className="card-hero"
        role="img"
        aria-label={`${item.title} thumbnail`}
      >
        <div style={{ color: "#001022" }}>
          <div
            id={`title-${item.id}`}
            style={{ fontSize: 16, fontWeight: 800, color: "#04263b" }}
          >
            {item.title}
          </div>
        </div>
      </div>

      <div>
        <div className="meta">{item.subtitle}</div>
        <p>{item.description}</p>
      </div>

      <div className="card-footer">
        <div className="meta">{item.meta}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="muted-btn" aria-label={`View ${item.title}`}>
            View
          </button>
          <button className="btn" aria-label={`Open ${item.title}`}>
            Open
          </button>
        </div>
      </div>
    </article>
  );
}
