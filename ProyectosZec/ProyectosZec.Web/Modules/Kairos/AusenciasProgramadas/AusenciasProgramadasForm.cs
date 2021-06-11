
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.AusenciasProgramadas")]
    [BasedOnRow(typeof(Entities.AusenciasProgramadasRow), CheckNames = true)]
    public class AusenciasProgramadasForm
    {
        public Int64 CodigoCliente { get; set; }
        public Int64 IdEmpleado { get; set; }
        public Int64 IdAusenciaProgramadaTipo { get; set; }
        public DateTime FechaDesde { get; set; }
        public DateTime FechaHasta { get; set; }
        public DateTime FechaBorrado { get; set; }
        public Decimal TotalHoras { get; set; }
        public Int32 TotalDias { get; set; }
    }
}