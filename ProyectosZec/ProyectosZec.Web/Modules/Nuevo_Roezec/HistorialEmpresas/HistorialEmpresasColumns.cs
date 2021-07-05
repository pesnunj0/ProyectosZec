
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.HistorialEmpresas")]
    [BasedOnRow(typeof(Entities.HistorialEmpresasRow), CheckNames = true)]
    public class HistorialEmpresasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 HistorialId { get; set; }
        public String EmpresaRazon { get; set; }
        public String Procedimiento { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaResolucion { get; set; }
        public Int16 SentidoResolucion { get; set; }
        public DateTime FechaEfecto { get; set; }
        public DateTime AcuseInicio { get; set; }
        public String PersonaAcuseIncioNombre { get; set; }
        public DateTime AcuseResolucion { get; set; }
        public String PersonaAcuseResolucionNombre { get; set; }
        [EditLink]
        public String Observaciones { get; set; }
        public String Ficheros { get; set; }
    }
}