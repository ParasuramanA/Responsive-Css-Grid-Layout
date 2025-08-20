import React from "react";
import ITEMS from "../data/items";
import GridCard from "./GridCard";
import "../styles/grid.css";

export default function ResponsiveGrid() {
  return (
    <div className="app">
      <div className="container" role="main">
        <header className="header" aria-label="Top">
          <div className="brand">
            <div className="logo" aria-hidden>
              IN
            </div>
            <div>
              <h1 className="title">Sample Grid Layout (Without Functionality)</h1>
              <div className="lead">
                Professional UI components using pure CSS Grid — responsive and
                accessible.
              </div>
            </div>
          </div>
          <nav className="nav" aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="toolbar">
          <div>
            <h2 className="section-title">Project Grid</h2>
            <div className="lead">
              A responsive grid layout with professional card design — adapts
              from mobile to large desktop.
            </div>
          </div>
          <div className="controls" role="region" aria-label="Controls">
            <input
              className="search"
              type="search"
              placeholder="Search projects..."
              aria-label="Search projects"
            />
            <button className="filter" aria-pressed="false">
              Filters
            </button>
            <button className="btn">New Project</button>
          </div>
        </div>

        <section className="grid" aria-label="Project list">
          {ITEMS.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
        </section>

        <div style={{ marginTop: 18 }}>
          <div className="empty-state" aria-hidden>
            Showing {ITEMS.length} professional projects — fully responsive
            layout using CSS Grid. Resize the window to see columns adapt.
          </div>
        </div>
      </div>
    </div>
  );
}
