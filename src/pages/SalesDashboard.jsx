export default function SalesDashboard() {
  return (
    <div>
      <h1>Sales Dashboard</h1>
      <p>Interactive analysis of outlet-wise and monthly sales performance.</p>

      {/* Replace the URL below with YOUR Tableau Public URL later */}
      <div style={{ width: "100%", height: "85vh" }}>
        <iframe
          src="https://public.tableau.com/app/profile/aparna.dinesh/viz/XYZ_anaytics/SalesDashboard?public=yes?:showVizHome=no&:embed=true"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}