export function formatDate(isoDate) {
    const fecha = new Date(isoDate);
    const opcionesFecha = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const fechaLegible = fecha.toLocaleDateString('es-ES', opcionesFecha);
    return fechaLegible;
  }