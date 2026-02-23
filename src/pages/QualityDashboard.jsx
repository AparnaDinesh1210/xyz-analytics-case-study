export default function QualityDashboard() {
  return (
    <div>
      <h1>Quality Dashboard</h1>
      <p>Monitoring defect rates, scores & operational quality trends.</p>

      {/* Replace this URL with YOUR Tableau Public dashboard */}
      <div style={{ width: "100%", height: "85vh" }}>
        <iframe
          src="https://public.tableau.com/app/profile/aparna.dinesh/viz/XYZ_anaytics/QualityDashboard?public=yes?:showVizHome=no&:embed=true"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}