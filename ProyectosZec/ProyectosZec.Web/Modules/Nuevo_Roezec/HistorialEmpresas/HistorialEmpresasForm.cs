
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.HistorialEmpresas")]
    [BasedOnRow(typeof(Entities.HistorialEmpresasRow), CheckNames = true)]
    public class HistorialEmpresasForm
    {
        public Int32 EmpresaId { get; set; }
        public Int32 ProcedimientoId { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaResolucion { get; set; }
        public Int16 SentidoResolucion { get; set; }
        public DateTime FechaEfecto { get; set; }
        public DateTime AcuseInicio { get; set; }
        public Int32 PersonaAcuseIncioId { get; set; }
        public DateTime AcuseResolucion { get; set; }
        public Int32 PersonaAcuseResolucionId { get; set; }
        public String Observaciones { get; set; }
        public String Ficheros { get; set; }
    }
}