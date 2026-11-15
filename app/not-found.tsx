export default function NotFound() {
  return (
    <main className="error-shell">
      <section className="error-card" aria-labelledby="error-title">
        <div className="error-mark" aria-hidden="true">!</div>
        <p className="error-kicker">Request status · 404</p>
        <p className="error-code" aria-hidden="true">404</p>
        <h1 className="error-title" id="error-title">This page is unavailable</h1>
        <p className="error-copy">The page you requested could not be found. It may have been moved, removed, or is temporarily unavailable.</p>
        <div className="error-footer">
          <span>PLEASE CHECK THE ADDRESS AND TRY AGAIN</span>
          <span>STATUS: NOT FOUND</span>
        </div>
      </section>
    </main>
  );
}
