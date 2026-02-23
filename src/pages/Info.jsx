export default function Info() {
  return (
    <div>
      <h1>About This Project</h1>

      <p>
        This portal integrates Tableau analytics with a React frontend for XYZ
        Retail Chain. It provides an overview of:
      </p>

      <ul>
        <li>Sales performance across all 10 outlets</li>
        <li>Quality and operational KPIs</li>
        <li>Trend analysis and comparative insights</li>
        <li>Centralized reporting with Tableau Public</li>
      </ul>

      <h3>Tech Stack</h3>
      <p>React, Vite, CSS, Tableau Public</p>

      <h3>Assumptions</h3>
      <ul>
        <li>Data is generally clean with minor calculated fields needed</li>
        <li>KPI definitions confirmed with business team</li>
      </ul>
    </div>
  );
}